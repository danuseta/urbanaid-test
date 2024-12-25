import '../components/form-register.js';
import Loading from '../components/common/Loading.js';

const RegisterPage = {
  render() {
    return `
        <div class="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8 relative" 
            style="background-image: url('https://urbanaid-client.vercel.app/images/hero-section1.png');">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="relative z-10">
                <form-register></form-register>
            </div>
        </div>
        `;
  },

  async init() {
    const app = document.getElementById('app');
    app.innerHTML = this.render();
  },

  cleanup() {
    Loading.hide();
  }
};

export default RegisterPage;