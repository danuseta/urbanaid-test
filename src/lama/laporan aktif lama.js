import ReportService from '../services/report-service';

const LaporanAktif = {
  data: [],

  async render() {
    try {
      if (!this.data.length) {
        const reports = await ReportService.getUserReports();
        if (!reports) {
          throw new Error('Data laporan tidak ditemukan');
        }
        this.data = reports;
      }

      const mainContent = `
                <div class="max-w-7xl mx-auto px-4 py-8">
                    <h2 class="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900 mb-8">
                        <span class="material-icons-round text-[#00899B]">dashboard</span>
                        Laporan Aktif
                    </h2>

                    <div class="space-y-4">
                        ${this.data
    .filter((report) => report.status === 'pending')
    .map((report) => this.createReportCard(report))
    .join('')}
                    </div>
                </div>
            `;

      setTimeout(() => {
        window.laporanAktif = this;
      }, 0);

      return mainContent;
    } catch (error) {
      console.error('Error fetching reports:', error);
      return `
                <div class="max-w-7xl mx-auto px-4 py-8 text-center">
                    <p class="text-base text-red-600">Gagal memuat data laporan: ${error.message}</p>
                </div>
            `;
    }
  },

  formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  },

  createReportCard(report) {
    return `
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center mb-4">
                    <span class="material-icons-round text-amber-600 mr-2 text-xl">schedule</span>
                    <span class="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold">
                        Pending
                    </span>
                </div>
                
                <div class="relative flex flex-col md:flex-row md:gap-6">
                    <div class="flex-grow order-1 md:order-none">
                        <div class="space-y-3">
                            <h3 class="text-xl font-semibold text-gray-900">${report.judul}</h3>
                            
                            <div class="flex items-center text-gray-700">
                                <span class="material-icons-round text-[#00899B] text-base mr-2">account_balance</span>
                                <span class="text-base">${report.jenis_infrastruktur}</span>
                            </div>
                            
                            <div class="flex items-center text-gray-700">
                                <span class="material-icons-round text-[#00899B] text-base mr-2">event</span>
                                <span class="text-base">${this.formatDate(report.tanggal_kejadian)}</span>
                            </div>
                            
                            <div class="flex items-center text-gray-700">
                                <span class="material-icons-round text-[#00899B] text-base mr-2">location_on</span>
                                <span class="text-base">${report.alamat}</span>
                            </div>
                            
                            <div class="text-gray-700 line-clamp-2 text-base">
                                <span class="material-icons-round text-[#00899B] text-base mr-2 align-text-top">description</span>
                                ${report.deskripsi}
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-2 mt-4 md:mt-0 flex items-center gap-2">
                        <button onclick="laporanAktif.editReport(${report.id})" 
                            class="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors">
                            <span class="material-icons-round text-xl">edit</span>
                        </button>
                        <button onclick="laporanAktif.deleteReport(${report.id})"
                            class="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors">
                            <span class="material-icons-round text-xl">delete</span>
                        </button>
                        <button onclick="laporanAktif.showDetail(${report.id})"
                            class="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 bg-gradient-to-r from-[#00899B] to-[#002F35] text-white rounded-lg hover:from-teal-700 hover:to-teal-900 transition-colors">
                            <span class="material-icons-round text-xl">visibility</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
  },

  async deleteReport(id) {
    try {
      // Cari laporan berdasarkan ID
      const report = this.data.find((r) => r.id === id);
      if (!report) {
        throw new Error('Laporan tidak ditemukan');
      }

      // Konfirmasi penghapusan
      const result = await Swal.fire({
        title: 'Hapus Laporan',
        text: `Apakah Anda yakin ingin menghapus laporan "${report.judul}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal',
        customClass: {
          popup: 'rounded-xl'
        }
      });

      // Jika tidak dikonfirmasi, keluar
      if (!result.isConfirmed) return;

      // Tampilkan loading
      Swal.fire({
        title: 'Sedang Menghapus...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Proses penghapusan
      await ReportService.deleteReport(id);

      // Hapus dari local state
      this.data = this.data.filter((r) => r.id !== id);

      // Perbarui tampilan
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.innerHTML = await this.render();
      }

      // Tampilkan sukses
      Swal.fire({
        title: 'Berhasil!',
        text: 'Laporan berhasil dihapus.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-xl'
        }
      });

    } catch (error) {
      // Tangani error
      Swal.fire({
        title: 'Gagal!',
        text: error.message || 'Terjadi kesalahan saat menghapus laporan',
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-xl'
        }
      });
    }
  },

  createModalContent(title, content) {
    return `
            <div class="bg-white rounded-xl">
                <div class="border-b border-gray-200 p-4">
                    <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
                </div>
                <div class="p-4">
                    ${content}
                </div>
            </div>
        `;
  },

  createFormField(label, content) {
    return `
            <div class="mb-6 last:mb-0">
                <div class="text-sm font-medium text-gray-700 mb-2">${label}</div>
                ${content}
            </div>
        `;
  },

  async editReport(id) {
    try {
      const report = this.data.find((r) => r.id === id);
      if (!report) return;

      const { value: formValues } = await Swal.fire({
        title: 'Edit Laporan',
        html: `
                    <div class="space-y-4">
                        ${this.createFormField(
    `<div class="flex items-center ml-4">
                                <span class="material-icons-round text-[#00899B] mr-2">title</span>
                                <span class="text-base text-gray-700">Judul Laporan</span>
                            </div>`,
    `<input name="swal-judul" class="w-full px-4 py-2 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00899B] focus:border-[#00899B]" 
                                    value="${report.judul}">`
  )}
                        
                        ${this.createFormField(
    `<div class="flex items-center ml-4">
                                <span class="material-icons-round text-[#00899B] mr-2">account_balance</span>
                                <span class="text-base text-gray-700">Jenis Infrastruktur</span>
                            </div>`,
    `<select name="swal-infrastruktur" class="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option value="Infrastruktur Perkotaan" ${report.jenis_infrastruktur === 'Infrastruktur Perkotaan' ? 'selected' : ''}>
                                    Infrastruktur Perkotaan
                                </option>
                                <option value="Infrastruktur Lingkungan" ${report.jenis_infrastruktur === 'Infrastruktur Lingkungan' ? 'selected' : ''}>
                                    Infrastruktur Lingkungan
                                </option>
                                <option value="Infrastruktur Sosial" ${report.jenis_infrastruktur === 'Infrastruktur Sosial' ? 'selected' : ''}>
                                    Infrastruktur Sosial
                                </option>
                            </select>`
  )}
    
                        ${this.createFormField(
    `<div class="flex items-center ml-4">
                                <span class="material-icons-round text-[#00899B] mr-2">event</span>
                                <span class="ml-1">Tanggal Kejadian</span>
                            </div>`,
    `<input type="date" name="swal-tanggal" class="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" 
                                    value="${report.tanggal_kejadian.split('T')[0]}">`
  )}
    
                        ${this.createFormField(
    `<div class="flex items-center ml-4">
                                <span class="material-icons-round text-[#00899B] mr-2">location_on</span>
                                <span class="ml-1">Alamat Lengkap</span>
                            </div>`,
    `<input name="swal-alamat" class="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500" 
                                    value="${report.alamat}">`
  )}
    
                        ${this.createFormField(
    `<div class="flex items-center ml-4">
                                <span class="material-icons-round text-[#00899B] mr-2">description</span>
                                <span class="ml-1">Deskripsi Masalah</span>
                            </div>`,
    `<textarea name="swal-deskripsi" class="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[100px]">${report.deskripsi}</textarea>`
  )}
    
                        ${this.createFormField(
    `<div class="flex items-center ml-4">
                                <span class="material-icons-round text-[#00899B] mr-2">image</span>
                                <span class="ml-1">Bukti Lampiran</span>
                            </div>`,
    `<div class="space-y-2">
                                <label class="flex items-center justify-center text-center px-3 py-3 bg-gray-50 text-gray-700 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100">
                                    <input type="file" name="swal-lampiran" accept="image/*" class="hidden">
                                    <div class="flex items-center justify-center w-full">
                                        <span class="material-icons-round text-[#00899B] mr-2">upload_file</span>
                                        <span class="text-base text-center">Pilih File Baru</span>
                                    </div>
                                </label>
                                <div class="text-sm text-gray-500 text-center">
                                    File saat ini: ${report.bukti_lampiran}
                                </div>
                                <div id="file-preview" class="mt-2"></div>
                            </div>`
  )}
                    </div>
                `,
        width: '800px',
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal',
        customClass: {
          popup: 'rounded-xl',
          title: 'text-3xl font-bold text-gray-900 mb-4'
        },
        showCloseButton: true,
        didRender: () => {
          const fileInput = document.querySelector('input[name="swal-lampiran"]');
          const filePreview = document.getElementById('file-preview');

          if (fileInput) {
            fileInput.addEventListener('change', (e) => {
              const file = e.target.files[0];

              // Validasi file
              if (!this.validateFile(file)) {
                e.target.value = ''; // Reset input
                return;
              }

              // Tampilkan preview
              if (filePreview) {
                filePreview.innerHTML = `
                                    <div class="file-preview flex items-center bg-gray-50 p-2 rounded-lg">
                                        <img src="${URL.createObjectURL(file)}" 
                                             alt="preview" 
                                             class="w-16 h-16 object-cover rounded-md mr-3">
                                        <div>
                                            <p class="text-sm font-medium">${file.name}</p>
                                            <p class="text-xs text-gray-500">${(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                        </div>
                                    </div>
                                `;
              }
            });
          }
        },
        preConfirm: () => {
          const fileInput = document.querySelector('input[name="swal-lampiran"]');
          const judul = document.querySelector('input[name="swal-judul"]').value.trim();
          const infrastruktur = document.querySelector('select[name="swal-infrastruktur"]').value;
          const tanggal = document.querySelector('input[name="swal-tanggal"]').value;
          const alamat = document.querySelector('input[name="swal-alamat"]').value.trim();
          const deskripsi = document.querySelector('textarea[name="swal-deskripsi"]').value.trim();

          // Validasi input
          if (!judul) {
            Swal.showValidationMessage('Judul laporan harus diisi');
            return false;
          }

          if (!alamat) {
            Swal.showValidationMessage('Alamat harus diisi');
            return false;
          }

          if (!deskripsi) {
            Swal.showValidationMessage('Deskripsi masalah harus diisi');
            return false;
          }

          // Siapkan FormData
          const formData = new FormData();
          formData.append('judul', judul);
          formData.append('jenis_infrastruktur', infrastruktur);
          formData.append('tanggal_kejadian', tanggal);
          formData.append('alamat', alamat);
          formData.append('deskripsi', deskripsi);

          // Tambahkan file jika ada
          if (fileInput.files.length > 0) {
            const file = fileInput.files[0];

            // Validasi file
            if (!this.validateFile(file)) {
              return false;
            }

            formData.append('bukti_lampiran', file);
          } else {
            // Gunakan lampiran lama jika tidak ada file baru
            formData.append('bukti_lampiran', report.bukti_lampiran);
          }

          return formData;
        }
      });

      // Jika form tidak diisi atau dibatalkan
      if (!formValues) return;

      // Tampilkan loading
      Swal.fire({
        title: 'Sedang Memperbarui...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Kirim update ke server
      const updatedReport = await ReportService.updateReport(id, formValues);

      // Update local state
      const index = this.data.findIndex((r) => r.id === id);
      if (index !== -1) {
        this.data[index] = { ...this.data[index], ...updatedReport };
      }

      // Perbarui tampilan
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.innerHTML = await this.render();
      }

      // Tampilkan sukses
      Swal.fire({
        title: 'Berhasil!',
        text: 'Laporan berhasil diperbarui.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-xl'
        }
      });

    } catch (error) {
      // Tangani error
      Swal.fire({
        title: 'Gagal!',
        text: error.message || 'Terjadi kesalahan saat memperbarui laporan',
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-xl'
        }
      });
    }
  },

  // Tambahan method untuk validasi file
  validateFile(file) {
    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      Swal.fire({
        title: 'File tidak valid!',
        text: 'File harus berformat JPEG atau PNG',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00899B'
      });
      return false;
    }

    if (file.size > maxSize) {
      Swal.fire({
        title: 'File terlalu besar!',
        text: 'Ukuran file tidak boleh lebih dari 5MB',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00899B'
      });
      return false;
    }

    return true;
  },

  async showDetail(id) {
    const report = this.data.find((r) => r.id === id);
    if (!report) return;

    await Swal.fire({
      title: report.judul,
      html: `
    <div class="space-y-6">
        ${this.createFormField(
    `<div class="flex items-center ml-4">
                <span class="material-icons-round text-[#00899B] mr-2">schedule</span>
                <span class="ml-1">Status Laporan</span>
            </div>`,
    `<div class="flex items-center bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-base border border-gray-200 text-justify">
                Pending
            </div>`
  )}
    
        ${this.createFormField(
    `<div class="flex items-center ml-4">
                <span class="material-icons-round text-[#00899B] mr-2">account_balance</span>
                <span class="ml-1">Jenis Infrastruktur</span>
            </div>`,
    `<div class="flex items-center bg-gray-50 px-3 py-2 rounded-lg text-base text-gray-700 border border-gray-200 text-justify">
                ${report.jenis_infrastruktur}
            </div>`
  )}
    
        ${this.createFormField(
    `<div class="flex items-center ml-4">
                <span class="material-icons-round text-[#00899B] mr-2">event</span>
                <span class="ml-1">Tanggal Kejadian</span>
            </div>`,
    `<div class="flex items-center bg-gray-50 px-3 py-2 rounded-lg text-base text-gray-700 border border-gray-200">
                ${this.formatDate(report.tanggal_kejadian)}
            </div>`
  )}
    
        ${this.createFormField(
    `<div class="flex items-center ml-4">
                <span class="material-icons-round text-[#00899B] mr-2">location_on</span>
                <span class="ml-1">Lokasi Kejadian</span>
            </div>`,
    `<div class="flex items-center bg-gray-50 px-3 py-2 rounded-lg text-base text-gray-700 border border-gray-200 text-justify">
                ${report.alamat}
            </div>`
  )}
    
        ${this.createFormField(
    `<div class="flex items-center ml-4">
                <span class="material-icons-round text-[#00899B] mr-2">description</span>
                <span class="ml-1">Deskripsi Masalah</span>
            </div>`,
    `<div class="flex items-center bg-gray-50 px-3 py-2 rounded-lg text-base text-gray-700 border border-gray-200 text-justify line-clamp-3">
                ${report.deskripsi}
            </div>`
  )}
    
        ${this.createFormField(
    `<div class="flex items-center ml-4">
                <span class="material-icons-round text-[#00899B] mr-2">image</span>
                <span class="ml-1">Bukti Lampiran</span>
            </div>`,
    `<div class="bg-gray-50 rounded-lg overflow-hidden">
                <img src="${report.bukti_lampiran}" alt="Bukti Lampiran" 
                    class="w-full h-auto object-cover"
                    onerror="this.src='/api/placeholder/800/400';this.onerror=null;">
            </div>`
  )}
    </div>
            `,
      width: '800px',
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: 'rounded-xl',
        title: 'text-3xl font-bold text-gray-900 mb-4'  // Ubah ukuran judul di sini
      }
    });
  }
};

export default LaporanAktif;