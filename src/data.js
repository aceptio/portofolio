import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools17 from "/assets/tools/php.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/blender.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Blender",
    ket: "3D Model",
    dad: "1900",
  },
];

import Atrrental1 from "/assets/proyek/Atrrental1.png";
import Tongkat from "/assets/proyek/Tongkat.png";
import Animasi3D from "/assets/proyek/Animasi3D.png";
import Webku from "/assets/proyek/Webku.png";

export const listProyek = [
  {
    id: 1,
    image: Atrrental1,
    title: "Playstation Rental Booking",
    subtitle: "An online booking system to simplify and efficiently manage and book PlayStation rentals.",
    fullDescription:"Developed a web-based booking system to streamline the PlayStation rental booking process. The system features customer management, rental scheduling, and unit availability notifications. The project was carried out by a team and significantly increased efficiency compared to manual methods.",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    dad: "100",
  },
  {
    id: 2,
    image: Tongkat,
    title: "IoT Cane for the Blind",
    subtitle: "An IoT-based technology solution to assist navigation for the blind with real-time obstacle detection.",
    fullDescription:"Developing a navigation aid for the visually impaired using an Arduino/ESP32-based ultrasonic sensor. This device can detect obstacles and provide responsive notifications via vibration or sound.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    dad: "200",
  },
  {
    id: 3,
    image: Animasi3D,
    title: "3D Animation Project",
    subtitle: "Exploration of digital animation by applying basic principles to produce dynamic and interactive visuals.",
    fullDescription:"Membuat animasi menggunakan Blender dan After Effects dengan menerapkan prinsip dasar animasi seperti timing, easing, dan transisi. Hasil proyek ini mendapatkan evaluasi yang baik dalam kegiatan akademik.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    dad: "300",
  },
  {
    id: 4,
    image: Webku,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, this portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a hub for potential employers and collaborators to explore my work, which reflects my creativity and technical rigor.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    dad: "400",
  },
];
