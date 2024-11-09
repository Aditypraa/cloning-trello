# 📋 Trello Clone

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/yourusername/trello-clone?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/trello-clone?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/trello-clone?style=social)

<img src="/api/placeholder/800/400" alt="Trello Clone Preview">

### 🚀 Sebuah clone Trello yang powerful dengan tech stack modern!

[Demo](http://your-demo-link.com) • [Laporkan Bug](https://github.com/yourusername/trello-clone/issues) • [Request Fitur](https://github.com/yourusername/trello-clone/issues)

</div>

## ✨ Fitur Utama

- 🎯 **Drag & Drop** - Pengalaman mengelola task yang mulus
- 🎨 **UI yang Intuitif** - Design yang bersih dan mudah digunakan
- 📱 **Responsive** - Berfungsi sempurna di desktop dan mobile
<!-- - 🔐 **Autentikasi** - Sistem login yang aman
- 📂 **Real-time Updates** - Perubahan tersinkronisasi secara real-time -->

## 🛠️ Tech Stack

### Backend
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📦 Prerequisites

- Node.js v14+
- MySQL v5.7+
- npm/yarn

## 🚀 Quick Start

1️⃣ **Clone repository & install dependencies**
```bash
# Clone the repo
git clone https://github.com/Aditypraa/cloning-trello.git

# Install backend dependencies
cd /backend
npm install

# Install frontend dependencies
cd /frontend
npm install
```

2️⃣ **Setup environment**
```bash
# jika belum ada!, Di folder backend, copy .env.example
cp .env.example .env

# Update konfigurasi database di .env
USERNAME=root
PASSWORD=root
DATABASE=clone_trello
HOST=127.0.0.1
PORT=3306
```

3️⃣ **Run migrations**
```bash
cd backend
npx sequelize-cli db:migrate
```

4️⃣ **Start development server**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

🎉 Aplikasi akan berjalan di:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## 📁 Struktur Project

```
cloning-trello/
├── 📂 backend/
    ├── 📂 src/
        ├── 📂 app/
│           ├── 📂 config/         # Konfigurasi database
│           ├── 📂 api/            # controller, route and validator
│           ├── 📂 db/             # Model database
│           └── 📄 app.js      # Entry point
├── 📂 frontend/
│   ├── 📂 public/
│   ├── 📂 src/
│   │   ├── 📂 components/  # Reusable components
│   │   ├── 📂 pages/       # Halaman utama
│   │   ├── 📂 services/    # API services
│   │   └── 📄 App.js       # Root component
│   └── 📄 package.json
└── 📄 README.md
```

## 🔗 API Reference

### 🎯 Items
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/v1/items` |  |
| GET | `/api/v1/items/:id` |  |
| PUT | `/api/v1/items/:id` |  |
| PUT | `/api/v1/items/:id/move` |  |
| DELETE | `/api/v1/items/:id` |  |

### 📋 Todos
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/v1/todos` |  |
| POST | `/api/v1/todos` |  |
| GET | `/api/v1/todos/:id` |  |
| PUT | `/api/v1/todos/:id` |  |
| DELETE | `/api/v1/todos/:id` |  |


## 🤝 Contributing

Kami sangat menghargai kontribusi Anda! Berikut langkah-langkah untuk berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Progress

- [x] Setup project structure
- [x] Database design
- [x] API development
- [ ] Frontend development
- [ ] Authentication system
- [ ] Real-time updates
- [ ] File attachment
- [ ] Activity logs
- [ ] Email notifications

## 🐛 Known Issues

Lihat [Issues](https://github.com/Aditypraa/cloning-trello/issues) untuk daftar bug yang diketahui dan fitur yang direncanakan.

## 📄 License

Distributed under the MIT License. Lihat `LICENSE` untuk informasi lebih lanjut.

## 👨‍💻 Authors

- **Your Name** - [GitHub](https://github.com/aditypraa)

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com)
- [React](https://reactjs.org)
- [Sequelize](https://sequelize.org)
- [MySQL](https://www.mysql.com)

---
<div align="center">
Made with ❤️ by Aditya Pratama

⭐️ Star repo ini jika membantu!
</div>