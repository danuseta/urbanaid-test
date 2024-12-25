// src/pages/Admin/DetailAdmin.js
import Sidebar from '../../components/admin/Sidebar.js';
import Loading from '../../components/common/Loading.js';
import '../../styles/admin.css';
import ReportService from '../../services/report-service.js';
import UrlParser from '../../utils/url-parser.js';

const DetailAdmin = {
  reportId: null,

  async init() {
    try {
      // Get ID from URL using UrlParser
      this.reportId = UrlParser.getAdminDetailId();
      console.log('Got report ID from URL:', this.reportId);

      if (!this.reportId) {
        throw new Error('Invalid report ID');
      }

      await this.render();
      Sidebar.afterRender();
      await this.loadReportDetails();
      this.initializeEventListeners();
    } catch (error) {
      console.error('Error in DetailAdmin init:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Gagal memuat detail laporan'
      });
    }
  },

  initializeEventListeners() {
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.processReport('accept'));
    }
    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => this.processReport('reject'));
    }
  },

  async loadReportDetails() {
    try {
      Loading.show();
      if (!this.reportId) {
        throw new Error('Report ID is missing');
      }
      console.log('Loading details for ID:', this.reportId); // Debug log
      const report = await ReportService.getReportDetail(this.reportId);

      const formattedReport = {
        id: report.id,
        judul: report.judul,
        jenisInfrastruktur: report.jenis_infrastruktur,
        deskripsi: report.deskripsi,
        tanggalKejadian: new Date(report.tanggal_kejadian).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        alamat: report.alamat,
        status: report.status,
        namaPelapor: report.nama_pelapor,
        tanggalMasuk: new Date(report.created_at).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        buktiLampiran: {
          url: report.bukti_lampiran,
          caption: 'Bukti Lampiran'
        }
      };

      this.renderReportDetails(formattedReport);
    } catch (error) {
      console.error('Error loading report details:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Gagal memuat detail laporan'
      });
    } finally {
      Loading.hide();
    }
  },

  async processReport(action) {
    try {
      const keterangan = document.getElementById('keterangan').value.trim();

      if (!keterangan) {
        Swal.fire({
          icon: 'warning',
          title: 'Peringatan',
          text: 'Keterangan harus diisi!'
        });
        return;
      }

      const confirmTitle = action === 'accept' ? 'Terima Laporan' : 'Tolak Laporan';
      const confirmText = action === 'accept' ?
        'Apakah Anda yakin akan menerima laporan ini?' :
        'Apakah Anda yakin akan menolak laporan ini?';

      const result = await Swal.fire({
        title: confirmTitle,
        text: confirmText,
        icon: action === 'accept' ? 'question' : 'warning',
        showCancelButton: true,
        confirmButtonText: action === 'accept' ? 'Ya, Terima' : 'Ya, Tolak',
        cancelButtonText: 'Batal'
      });

      if (result.isConfirmed) {
        // Show loading state
        Swal.fire({
          title: 'Memproses...',
          text: 'Mohon tunggu sebentar',
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          }
        });

        let response;
        if (action === 'accept') {
          response = await ReportService.acceptReport(this.reportId, keterangan);
        } else {
          response = await ReportService.rejectReport(this.reportId, keterangan);
        }

        await Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: `Laporan telah berhasil ${action === 'accept' ? 'diterima' : 'ditolak'}`,
          timer: 1500
        });

        // Perbaikan navigasi
        window.location.href = '/admin/laporan';
      }
    } catch (error) {
      console.error('Error processing report:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Terjadi kesalahan saat memproses laporan'
      });
    }
  },

  renderReportDetails(report) {
    const detailContainer = document.getElementById('report-detail-container');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <!-- Header -->
                <div class="flex items-center gap-4 mb-6 pb-4 border-b">
                    <a href="/admin/laporan" 
                       class="inline-flex items-center justify-center p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        <span class="material-icons-round">arrow_back</span>
                    </a>
                    <div>
                        <h1 class="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                            ${report.judul}
                        </h1>
                        <p class="text-gray-600 text-sm lg:text-base">
                            ID Laporan: #${report.id} | Pelapor: ${report.namaPelapor} <br>
                            Tanggal Kejadian: ${report.tanggalKejadian} | Tanggal Masuk: ${report.tanggalMasuk}
                        </p>
                    </div>
                </div>
     
                <!-- Information Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h2 class="text-sm uppercase text-gray-500 font-medium mb-2">Detail Laporan</h2>
                        <div class="bg-gray-50 rounded-lg p-4">
                            <div class="mb-4">
                                <label class="text-sm text-gray-500">Status</label>
                                <p class="mt-1">
                                    <span class="px-3 py-1 rounded-full text-sm ${
  report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
    report.status === 'diterima' ? 'bg-green-100 text-green-800' :
      'bg-red-100 text-red-800'
}">
                                        ${report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                                    </span>
                                </p>
                            </div>
                            <div class="mb-4">
                                <label class="text-sm text-gray-500">Jenis Infrastruktur</label>
                                <p class="text-gray-800 font-medium">${report.jenisInfrastruktur}</p>
                            </div>
                            <div class="mb-4">
                                <label class="text-sm text-gray-500">Deskripsi</label>
                                <p class="text-gray-800 whitespace-pre-line">${report.deskripsi}</p>
                            </div>
                            <div>
                                <label class="text-sm text-gray-500">Alamat</label>
                                <p class="text-gray-800">${report.alamat}</p>
                            </div>
                        </div>
                    </div>
     
                    <!-- Bukti Lampiran -->
                    <div>
                        <h2 class="text-sm uppercase text-gray-500 font-medium mb-2">Bukti Lampiran</h2>
                        <div class="bg-gray-50 rounded-lg p-4">
                            <img src="${report.buktiLampiran.url}" 
                                 alt="Bukti lampiran" 
                                 class="w-full h-64 object-cover rounded-lg mb-2"
                                 onerror="this.src='https://via.placeholder.com/400x300?text=Bukti+Lampiran+Tidak+Tersedia'">
                            <p class="text-sm text-gray-600 text-center">Bukti Lampiran Laporan</p>
                        </div>
                    </div>
                </div>
     
                ${report.status === 'pending' ? `
                    <!-- Keterangan Form -->
                    <div class="mb-6 pt-4 border-t">
                        <h2 class="text-sm uppercase text-gray-500 font-medium mb-2">Keterangan</h2>
                        <div class="bg-gray-50 rounded-lg p-4">
                            <textarea id="keterangan"
                                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    placeholder="Masukkan keterangan untuk laporan..."></textarea>
                        </div>
                    </div>
     
                    <!-- Action Buttons -->
                    <div class="flex gap-3">
                        <button id="accept-btn"
                                class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center">
                            <span class="material-icons-round mr-2">check</span>
                            Terima Laporan
                        </button>
                        <button id="reject-btn"
                                class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center">
                            <span class="material-icons-round mr-2">close</span>
                            Tolak Laporan
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
  },

  render() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
            <div class="min-h-screen bg-gray-100">
                ${Sidebar.render()}
                
                <main class="lg:ml-64 p-4 lg:p-8">
                    <div id="report-detail-container">
                        <!-- Detail content will be loaded here -->
                    </div>
                </main>
            </div>
        `;
  },

  cleanup() {
    Loading.hide(); // Pastikan loading disembunyikan saat komponen dibersihkan
  }
};

export default DetailAdmin;