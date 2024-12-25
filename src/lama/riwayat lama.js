import RiwayatService from '../services/riwayat-service';
import { hashId } from '../utils/hash-util';

const RiwayatLaporan = {
  data: [],

  async render() {
    try {
      this.data = await RiwayatService.getRiwayatByUser();
      const acceptedReports = this.data.filter((report) => report.status === 'diterima');
      const rejectedReports = this.data.filter((report) => report.status === 'ditolak');

      return `
                <div class="max-w-7xl mx-auto px-4 py-8">
                    <div class="w-full">
                        <h2 class="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900 mb-8">
                            <span class="material-icons-round text-[#00899B] text-xl">dashboard</span>
                            Riwayat Laporan
                        </h2>
                        
                        <div class="flex justify-end mb-8">
                            <div class="relative inline-block w-64">
                                <select 
                                    onchange="RiwayatLaporan.filterReports(this.value)"
                                    class="block w-full bg-white border-2 border-gray-200 text-gray-900 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00899B] focus:border-[#00899B] appearance-none text-base"
                                >
                                    <option value="all">Semua Laporan (${this.data.length})</option>
                                    <option value="diterima">Diterima (${acceptedReports.length})</option>
                                    <option value="ditolak">Ditolak (${rejectedReports.length})</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <span class="material-icons-round text-xl">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-4">
                            ${this.data.length ?
    this.data.map((report) => this.createReportCard(report)).join('') :
    '<p class="text-center text-base text-gray-500">Tidak ada riwayat laporan</p>'
}
                        </div>
                    </div>
                </div>
            `;
    } catch (error) {
      console.error('Error fetching reports:', error);
      return `
                <div class="max-w-7xl mx-auto px-4 py-8 text-center">
                    <p class="text-base text-red-600">Gagal memuat data riwayat: ${error.message}</p>
                </div>
            `;
    }
  },

  formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  },

  getStatusIcon(status) {
    switch (status) {
    case 'diterima':
      return 'check_circle';
    case 'ditolak':
      return 'cancel';
    default:
      return 'info';
    }
  },

  getStatusClass(status) {
    switch (status) {
    case 'diterima':
      return {
        bg: 'bg-emerald-100',
        text: 'text-emerald-800'
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

  createReportCard(report) {
    const statusIcon = this.getStatusIcon(report.status);
    const statusClass = this.getStatusClass(report.status);

    return `
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" data-status="${report.status}">
                <div class="flex items-center mb-4">
                    <span class="material-icons-round text-xl ${statusClass.text} mr-2">${statusIcon}</span>
                    <span class="${statusClass.bg} ${statusClass.text} px-4 py-1 rounded-full text-sm font-semibold">
                        ${report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </span>
                </div>
                
                <div class="flex flex-col md:flex-row md:gap-6">
                    <div class="flex-grow">
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
                            
                            <div class="text-gray-700 line-clamp-2">
                                <span class="material-icons-round text-[#00899B] text-base mr-2 align-top">description</span>
                                <span class="text-base">${report.deskripsi}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 md:mt-0 flex items-center">
                        <button onclick="RiwayatLaporan.showDetail('${report.id}')"
                            class="flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 bg-gradient-to-r from-[#00899B] to-[#002F35] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            <span class="material-icons-round text-xl">visibility</span>
                            <span class="text-base font-semibold">Detail</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
  },

  showDetail(id) {
    try {
      if (!id) {
        console.error('No ID provided to showDetail');
        return;
      }

      const hashedId = hashId(id);
      console.log('Original ID:', id);
      console.log('Hashed ID:', hashedId);

      if (!hashedId) {
        throw new Error('Failed to hash ID');
      }

      const url = `/pelaporan/riwayat/${hashedId}`;
      window.App.navigateTo(url);
    } catch (error) {
      console.error('Error in showDetail:', error);
    }
  },

  filterReports(status) {
    const cards = document.querySelectorAll('[data-status]');
    cards.forEach((card) => {
      if (!card.classList.contains('filter-btn')) {
        if (status === 'all' || card.dataset.status === status) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  },


  async init() {
    const mainContent = document.querySelector('.content-wrapper');
    if (mainContent) {
      this.data = await RiwayatService.getRiwayatByUser();
      window.riwayatData = this.data;

      mainContent.innerHTML = await this.render();
      window.RiwayatLaporan = this;
    }
  }
};

window.RiwayatLaporan = RiwayatLaporan;

export default RiwayatLaporan;