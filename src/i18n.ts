import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      invitation: {
        dear: "Dear {{name}},",
        description: "You are invited to the wedding of Dhuha & Nisa",
        open: "Open Invitation",
      },
      countdown: {
        label: "Counting Down",
        units: {
          days: "days",
          hours: "hours",
          minutes: "minutes",
          seconds: "seconds",
        },
      },
      music: {
        play: "Play Music",
        pause: "Pause Music",
      },
      lang: {
        en: "EN",
        id: "ID",
      },
      navbar: {
        couple: "Couple",
        story: "Story",
        gallery: "Gallery",
        events: "Events",
        gift: "Gift",
        rsvp: "RSVP",
        view: "View",
        read: "Read",
        open: "Open",
        details: "Details",
        info: "Info",
        confirm: "Confirm",
      },
      hero: {
        wedding_of: "The Wedding Of",
        scroll: "Scroll",
        supported_by: "Supported by",
      },
      couple: {
        title: "The Happy Couple",
        subtitle: "We are getting married",
        groom_role: "The Groom",
        bride_role: "The Bride",
        only_child_of: "Only child of",
        first_daughter_of: "First daughter of",
      },
      gallery: {
        title: "Our Moments",
        item: "Moment {{index}}",
      },
      story: {
        title: "Our Journey",
        p1: "Our story began in 2022, with a simple swipe that felt like destiny.",
        p2: "We soon realized our paths had crossed long before, in the same college halls.",
        p3: "A movie date became our first chapter, and three weeks of heartfelt conversations became the beginning of “us.”",
        p4: "Today, every step we’ve walked leads beautifully to this moment — our marriage, our forever.",
      },
      events: {
        save_the_date: "Save The Date",
        open_in_maps: "Open in Maps",
      },
      gift: {
        title: "Wedding Gift",
        description:
          "Your love and company on our wedding day is the only present we require. If you do wish to honor us with a gift, a contribution towards our future together would be appreciated.",
        address_label: "Address",
        address_text:
          "Apartemen Sentra Timur Tower Orange, Pulo Gebang, Jakarta Timur",
        open_in_maps: "Open in Maps",
        copy: "Copy",
        copied: "Copied",
      },
      wishes: {
        title: "Leave a Wish",
        fields: {
          name: "Your Name",
          message: "Message",
        },
        submit: "Send Message",
        latest: "Latest Wishes",
        empty: "No wishes yet. Be the first to leave a message!",
        confirm_title: "Send Wish",
        confirm_message: "Are you sure you want to send this wish?",
        confirm_yes: "Send",
        confirm_no: "Cancel",
        toast_loading: "Sending wish...",
        toast_success: "Your wish has been sent!",
        toast_error: "Failed to send wish",
        spam_wait: "Please wait {{s}}s before sending another wish.",
      },
      rsvp: {
        title: "RSVP",
        subtitle: "Kindly Respond before event",
        fields: {
          full_name: "Full Name",
          email: "Email",
          attendance: "Attendance",
          guests: "Guests",
          accept: "Joyfully Accepts",
          decline: "Regretfully Declines",
        },
        submit: "Confirm Attendance",
        toast_loading: "Sending RSVP...",
        toast_success: "RSVP Sent Successfully",
        toast_error: "Failed to submit RSVP",
        confirm_title: "Send RSVP",
        confirm_message: "Are you sure you want to submit your RSVP?",
        confirm_yes: "Send",
        confirm_no: "Cancel",
        spam_wait: "Please wait {{s}}s before submitting again.",
      },
      footer: {
        our_story: "Our Story",
        events: "Events",
        gift: "Gift",
        rsvp: "RSVP",
        copyright: "© 2025 Dhuha & Nisa's Wedding. With love.",
      },
      quotes: {
        main: "Eternities repeating, where everything destined circles back to what it loves. If that is true, then you and I are simply two souls returning to the same choice — across belief, across lifetimes, across the long night of the world.",
        author: "Friedrich Nietzsche",
      },
    },
  },
  id: {
    translation: {
      invitation: {
        dear: "Kepada {{name}},",
        description: "Anda diundang ke pernikahan Dhuha & Nisa",
        open: "Buka Undangan",
      },
      countdown: {
        label: "Menuju Acara",
        units: {
          days: "hari",
          hours: "jam",
          minutes: "menit",
          seconds: "detik",
        },
      },
      music: {
        play: "Putar Musik",
        pause: "Jeda Musik",
      },
      lang: {
        en: "EN",
        id: "ID",
      },
      navbar: {
        couple: "Mempelai",
        story: "Kisah",
        gallery: "Galeri",
        events: "Acara",
        gift: "Hadiah",
        rsvp: "RSVP",
        view: "Lihat",
        read: "Baca",
        open: "Buka",
        details: "Detail",
        info: "Info",
        confirm: "Konfirmasi",
      },
      hero: {
        wedding_of: "Pernikahan",
        scroll: "Gulir",
        supported_by: "Didukung oleh",
      },
      couple: {
        title: "Mempelai Bahagia",
        subtitle: "Kami akan menikah",
        groom_role: "Mempelai Pria",
        bride_role: "Mempelai Wanita",
        only_child_of: "Anak tunggal dari",
        first_daughter_of: "Putri pertama dari",
      },
      gallery: {
        title: "Momen Kami",
        item: "Momen {{index}}",
      },
      story: {
        title: "Perjalanan Kami",
        p1: "Kisah kami dimulai pada tahun 2022, dari sapaan sederhana yang terasa seperti takdir.",
        p2: "Kami segera menyadari bahwa jalan kami pernah berpapasan sebelumnya, di lorong kampus yang sama.",
        p3: "Janji menonton film menjadi bab pertama, dan tiga minggu percakapan hangat menjadi awal dari ‘kita’.",
        p4: "Hari ini, setiap langkah yang kami lalui bermuara indah pada momen ini — pernikahan kami, selamanya.",
      },
      events: {
        save_the_date: "Tandai Tanggalnya",
        open_in_maps: "Buka di Maps",
      },
      gift: {
        title: "Hadiah Pernikahan",
        description:
          "Kehadiran dan doa Anda di hari pernikahan kami adalah hadiah terindah. Jika berkenan memberi hadiah, kontribusi untuk masa depan kami akan sangat berarti.",
        address_label: "Alamat",
        address_text:
          "Apartemen Sentra Timur Tower Orange, Pulo Gebang, Jakarta Timur",
        open_in_maps: "Buka di Maps",
        copy: "Salin",
        copied: "Tersalin",
      },
      wishes: {
        title: "Tinggalkan Ucapan",
        fields: {
          name: "Nama Anda",
          message: "Pesan",
        },
        submit: "Kirim Pesan",
        latest: "Ucapan Terbaru",
        empty: "Belum ada ucapan. Jadilah yang pertama!",
        confirm_title: "Kirim Ucapan",
        confirm_message: "Apakah Anda yakin ingin mengirim ucapan ini?",
        confirm_yes: "Kirim",
        confirm_no: "Batal",
        toast_loading: "Mengirim ucapan...",
        toast_success: "Ucapan Anda telah terkirim!",
        toast_error: "Gagal mengirim ucapan",
        spam_wait: "Harap tunggu {{s}}d sebelum mengirim lagi.",
      },
      rsvp: {
        title: "RSVP",
        subtitle: "Mohon konfirmasi sebelum acara",
        fields: {
          full_name: "Nama Lengkap",
          email: "Email",
          attendance: "Kehadiran",
          guests: "Tamu",
          accept: "Hadir dengan sukacita",
          decline: "Berhalangan hadir",
        },
        submit: "Konfirmasi Kehadiran",
        toast_loading: "Mengirim RSVP...",
        toast_success: "RSVP berhasil dikirim",
        toast_error: "Gagal mengirim RSVP",
        confirm_title: "Kirim RSVP",
        confirm_message: "Apakah Anda yakin ingin mengirim RSVP?",
        confirm_yes: "Kirim",
        confirm_no: "Batal",
        spam_wait: "Harap tunggu {{s}}d sebelum mengirim lagi.",
      },
      footer: {
        our_story: "Kisah Kami",
        events: "Acara",
        gift: "Hadiah",
        rsvp: "RSVP",
        copyright: "© 2025 Pernikahan Dhuha & Nisa. Dengan cinta.",
      },
      quotes: {
        main: "Kekekalan berulang, di mana segala yang ditakdirkan kembali pada yang dicintainya. Jika itu benar, maka kita adalah dua jiwa yang kembali pada pilihan yang sama — melintasi keyakinan, melintasi kehidupan, melintasi malam panjang dunia.",
        author: "Friedrich Nietzsche",
      },
    },
  },
};

const storedLang = (() => {
  try {
    return localStorage.getItem("lang") || "en";
  } catch {
    return "en";
  }
})();

i18n.use(initReactI18next).init({
  resources,
  lng: storedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
