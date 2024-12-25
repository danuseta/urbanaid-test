import UrlParser from '../utils/url-parser.js';
import { Navbar } from '../components/common/Navbar.js';
import { Footer } from '../components/common/Footer.js';
import ReviewService from '../services/review-service.js';

const DetailLaporan = {
  data: null,
  currentRating: 0,
  userReview: null,
  isSubmitting: false,

  async getData(hashedId) {
    try {
      if (!hashedId) {
        throw new Error('ID tidak valid');
      }

      console.log('Looking for data with hashed ID:', hashedId);

      if (!window.riwayatData) {
        console.log('Fetching riwayat data...');
        const { default: RiwayatService } = await import('../services/riwayat-service.js');
        window.riwayatData = await RiwayatService.getRiwayatByUser();
      }

      console.log('Available reports:', window.riwayatData);

      const searchId = String(hashedId);
      console.log('Searching for report with ID:', searchId);

      const report = window.riwayatData.find((r) => String(r.id) === searchId);

      if (!report) {
        throw new Error(`Laporan dengan ID ${searchId} tidak ditemukan`);
      }

      this.data = {
        id: report.id,
        judul: report.judul,
        jenisInfrastruktur: report.jenis_infrastruktur,
        deskripsi: report.deskripsi,
        tanggalKejadian: report.tanggal_kejadian,
        tanggalSelesai: report.tanggal_selesai,
        alamat: report.alamat,
        status: report.status,
        keterangan: report.keterangan_laporan,
        buktiLampiran: report.bukti_lampiran
      };

      await this.checkUserReview();
      return this.data;
    } catch (error) {
      console.error('Error getting report data:', error);
      throw error;
    }
  },

  async checkUserReview() {
    try {
      const reviews = await ReviewService.getReviewsByLaporanId(this.data.id);
      const userData = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
      this.userReview = reviews.find((review) => review.user_id === userData.id);
    } catch (error) {
      console.error('Error checking user review:', error);
    }
  },

  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleDateString('id-ID', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  },

  getStatusIcon(status) {
    switch (status.toLowerCase()) {
    case 'diterima':
      return 'check_circle';
    case 'ditolak':
      return 'cancel';
    default:
      return 'info';
    }
  },

  getStatusClass(status) {
    switch (status.toLowerCase()) {
    case 'diterima':
      return {
        bg: 'bg-blue-100',
        text: 'text-blue-800'
      };
    case 'ditolak':
      return {
        bg: 'bg-red-100',
        text: 'text-red-800'
      };
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-800'
      };
    }
  },

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  },

  getImagePath(imagePath) {
    if (!imagePath) return '/images/placeholder.jpg';
    return imagePath;
  },

  setRating(rating) {
    this.currentRating = rating;
    document.querySelectorAll('[data-rating]').forEach((btn, index) => {
      const star = btn.querySelector('.material-icons-round');
      if (star) {
        star.classList.toggle('text-yellow-400', index < rating);
        star.classList.toggle('text-gray-300', index >= rating);
      }
    });
  },

  async submitFeedback(event) {
    event.preventDefault();
    if (this.isSubmitting) return false;

    try {
      this.isSubmitting = true;
      const submitBtn = document.querySelector('[type="submit"]');
      const originalContent = submitBtn.innerHTML;
      submitBtn.innerHTML = `
                <div class="flex items-center justify-center space-x-2">
                    <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Mengirim...</span>
                </div>
            `;
      submitBtn.disabled = true;

      const feedbackText = document.getElementById('feedback').value;

      if (!this.currentRating) {
        throw new Error('Silakan berikan rating terlebih dahulu');
      }

      await ReviewService.createReview({
        laporan_id: this.data.id,
        rating: this.currentRating,
        review_text: feedbackText
      });

      await this.checkUserReview();

      const mainContainer = document.querySelector('#app');
      if (mainContainer) {
        mainContainer.innerHTML = this.render();
      }

      Swal.fire({
        icon: 'success',
        title: 'Terima Kasih!',
        text: 'Ulasan Anda telah berhasil dikirim',
        confirmButtonColor: '#00899B'
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Terjadi kesalahan saat mengirim ulasan',
        confirmButtonColor: '#00899B'
      });
    } finally {
      this.isSubmitting = false;
    }
    return false;
  },

  async submitFeedback(event) {
    event.preventDefault();
    if (this.isSubmitting) return false;

    try {
      this.isSubmitting = true;

      // Show loading dengan Swal
      Swal.fire({
        title: 'Mengirim ulasan...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });

      const feedbackText = document.getElementById('feedback').value;

      if (!this.currentRating) {
        throw new Error('Silakan berikan rating terlebih dahulu');
      }

      await ReviewService.createReview({
        laporan_id: this.data.id,
        rating: this.currentRating,
        review_text: feedbackText
      });

      await this.checkUserReview();

      const mainContainer = document.querySelector('#app');
      if (mainContainer) {
        mainContainer.innerHTML = this.render();
      }

      Swal.fire({
        icon: 'success',
        title: 'Terima Kasih!',
        text: 'Ulasan Anda telah berhasil dikirim',
        confirmButtonColor: '#00899B'
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Terjadi kesalahan saat mengirim ulasan',
        confirmButtonColor: '#00899B'
      });
    } finally {
      this.isSubmitting = false;
    }
    return false;
  },

  render() {
    if (!this.data) {
      return `
                ${Navbar()}
                <div class="flex items-center justify-center min-h-screen bg-gray-50">
                    <div class="text-center">
                        <div class="inline-block w-8 h-8 border-4 border-[#00899B] border-t-transparent rounded-full animate-spin"></div>
                        <p class="mt-4 text-base text-gray-600">Memuat detail laporan...</p>
                    </div>
                </div>
                ${Footer()}
            `;
    }

    const statusClass = this.getStatusClass(this.data.status);

    return `
            ${Navbar()}
            <div class="min-h-screen bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center md:mt-4 lg:mt-6">Detail Laporan</h1>
                    
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                        <!-- Hero Image Section -->
                        <div class="relative h-96 bg-gray-100 flex items-center justify-center">
                            <button 
                                onclick="window.App.navigateTo('/pelaporan/riwayat')"
                                class="absolute top-4 left-4 z-10 flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-white shadow-md hover:shadow-lg text-gray-600 hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00899B] focus:ring-offset-2"
                                aria-label="Kembali ke halaman riwayat"
                            >
                                <span class="material-icons-round text-xl">arrow_back</span>
                            </button>
     
                            <img 
                                src="${this.getImagePath(this.data.buktiLampiran)}"
                                alt="Bukti lampiran"
                                onerror="this.src='/images/placeholder.jpg'"
                                class="h-full w-auto max-w-full object-contain"
                            >
                            <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                                <div class="flex items-center">
                                    <span class="material-icons-round mr-2 text-xl">photo</span>
                                    <span class="text-base">Bukti Lampiran</span>
                                </div>
                            </div>
                        </div>
     
                        <div class="p-6">
                            <!-- ID Laporan Section -->
                            <div class="mb-6">
                                <div class="text-sm font-medium text-gray-500">ID Laporan</div>
                                <div class="mt-1 text-xl font-semibold text-gray-900">
                                    UAID-24${String(this.data.id).padStart(2, '0')}
                                </div>
                            </div>
     
                            <!-- Main Info Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-6">
                                    <!-- Judul Section -->
                                    <div>
                                        <div class="text-sm font-medium text-gray-500">Judul Laporan</div>
                                        <div class="mt-1 text-base text-gray-900">${this.data.judul}</div>
                                    </div>
     
                                    <!-- Jenis Section -->
                                    <div>
                                        <div class="text-sm font-medium text-gray-500">Jenis Infrastruktur</div>
                                        <div class="mt-1 text-base text-gray-900">${this.data.jenisInfrastruktur}</div>
                                    </div>
     
                                    <!-- Status Section -->
                                    <div>
                                        <div class="text-sm font-medium text-gray-500">Status</div>
                                        <div class="mt-1">
                                            <div class="inline-flex items-center">
                                                <span class="material-icons-round text-xl ${statusClass.text} mr-2">
                                                    ${this.getStatusIcon(this.data.status)}
                                                </span>
                                                <span class="${statusClass.bg} ${statusClass.text} px-4 py-1 rounded-full text-sm font-semibold">
                                                    ${this.capitalizeFirstLetter(this.data.status)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
     
                                <div class="space-y-6">
                                    <!-- Dates Section -->
                                    <div>
                                        <div class="text-sm font-medium text-gray-500">Tanggal Pengajuan</div>
                                        <div class="mt-1 text-base text-gray-900">
                                            ${this.formatDate(this.data.tanggalKejadian)}
                                        </div>
                                    </div>
     
                                    <div>
                                        <div class="text-sm font-medium text-gray-500">Tanggal Penyelesaian</div>
                                        <div class="mt-1 text-base text-gray-900">
                                            ${this.data.tanggalSelesai ? this.formatDate(this.data.tanggalSelesai) : '-'}
                                        </div>
                                    </div>
                                </div>
                            </div>
     
                            <!-- Additional Info Section -->
                            <div class="mt-6 space-y-6">
                                <div>
                                    <div class="text-sm font-medium text-gray-500">Alamat</div>
                                    <div class="mt-1 text-base text-gray-900">${this.data.alamat}</div>
                                </div>
     
                                <div>
                                    <div class="text-sm font-medium text-gray-500">Deskripsi</div>
                                    <div class="mt-1 text-base text-gray-900 whitespace-pre-line">${this.data.deskripsi}</div>
                                </div>
     
                                <div>
                                    <div class="text-sm font-medium text-gray-500">Keterangan Laporan</div>
                                    <div class="mt-1 text-base text-gray-900">${this.data.keterangan || '-'}</div>
                                </div>
                            </div>
     
                            <!-- Review Section -->
                            ${this.data.status === 'diterima' || this.data.status === 'ditolak' ?
    this.userReview ?
      this.renderExistingReview() :
      this.renderReviewForm()
    : ''
}
                        </div>
                    </div>
                </div>
            </div>
            ${Footer()}
        `;
  },

  renderExistingReview() {
    return `
            <div class="mt-8 border-t border-gray-200 pt-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Ulasan Anda</h3>
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <div class="flex">
                            ${[1, 2, 3, 4, 5].map((num) => `
                                <span class="material-icons-round text-2xl ${num <= this.userReview.rating ? 'text-yellow-400' : 'text-gray-300'}">
                                    star
                                </span>
                            `).join('')}
                        </div>
                        <span class="ml-2 text-sm text-gray-600">
                            ${this.userReview.created_at ? this.formatDate(this.userReview.created_at) : ''}
                        </span>
                    </div>
                    <p class="text-base text-gray-700 whitespace-pre-line">${this.userReview.review_text}</p>
                </div>
            </div>
        `;
  },

  renderReviewForm() {
    return `
            <div class="mt-8 border-t border-gray-200 pt-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Feedback Laporan</h3>
                <form onsubmit="return DetailLaporan.submitFeedback(event)" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Berikan Rating</label>
                        <div class="flex space-x-2">
                            ${[1, 2, 3, 4, 5].map((num) => `
                                <button type="button"
                                    onclick="DetailLaporan.setRating(${num})"
                                    class="p-1 hover:scale-110 transition-transform duration-200 focus:outline-none"
                                    data-rating="${num}">
                                    <span class="material-icons-round text-2xl text-gray-300">
                                        star
                                    </span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <label for="feedback" class="block text-sm font-medium text-gray-700 mb-2">
                            Ulasan
                        </label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            rows="4"
                            class="w-full px-4 py-2 text-base text-gray-900 border-2 border-gray-200 rounded-lg focus:border-[#00899B] focus:ring-2 focus:ring-[#00899B] transition-colors duration-200 resize-none"
                            placeholder="Berikan ulasan Anda terkait penanganan laporan ini..."
                        ></textarea>
                    </div>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="flex items-center justify-center min-h-[44px] gap-2 px-6 py-2 bg-gradient-to-r from-[#00899B] to-[#002F35] text-white text-base font-semibold rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <span class="material-icons-round">send</span>
                            Kirim Ulasan
                        </button>
                    </div>
                </form>
            </div>
        `;
  },


  async init() {
    try {
      window.scrollTo(0, 0);

      const hashedId = UrlParser.getDetailId();
      console.log('Parsed hashed ID:', hashedId);

      if (!hashedId) {
        throw new Error('ID Laporan tidak ditemukan');
      }

      await this.getData(hashedId);

      const mainContainer = document.querySelector('#app');
      if (mainContainer) {
        mainContainer.innerHTML = `
                    <div class="min-h-screen bg-gray-50">
                        ${this.render()}
                    </div>
                `;
      } else {
        throw new Error('Container #app tidak ditemukan');
      }

      // Initialize as global object for event handlers
      window.DetailLaporan = this;
    } catch (error) {
      console.error('Error initializing detail page:', error);
      const errorMessage = error.message || 'Terjadi kesalahan saat memuat detail laporan';

      const mainContainer = document.querySelector('#app');
      if (mainContainer) {
        mainContainer.innerHTML = `
                    ${Navbar()}
                    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                        <div class="text-center p-4">
                            <span class="material-icons-round text-red-500 text-4xl mb-4">error</span>
                            <h2 class="text-xl font-bold text-gray-800 mb-2">Error!</h2>
                            <p class="text-gray-600 mb-4">${errorMessage}</p>
                            <button 
                                onclick="window.App.navigateTo('/pelaporan/riwayat')"
                                class="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                            >
                                <span class="material-icons-round mr-2">arrow_back</span>
                                Kembali ke Riwayat
                            </button>
                        </div>
                    </div>
                    ${Footer()}
                `;
      }
    }
  },

  cleanup() {
    this.data = null;
    this.currentRating = 0;
    this.userReview = null;
    this.isSubmitting = false;
    window.riwayatData = null;
    window.DetailLaporan = null;
  }
};

export default DetailLaporan;