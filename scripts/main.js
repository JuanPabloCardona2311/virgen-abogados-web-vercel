const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainNav");
const navLinks = nav ? nav.querySelectorAll("a") : [];
const yearElement = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

const EMAILJS_PUBLIC_KEY = "MWaLXaNdj_ZSuwRY4";
const EMAILJS_SERVICE_ID = "service_zfxpo3c";
const EMAILJS_TEMPLATE_ID = "template_5rsr70v";

if (window.emailjs) {
  window.emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";
    }

    if (formStatus) {
      formStatus.textContent = "";
      formStatus.className = "form-status";
    }

    try {
      const templateParams = {
        from_name: document.getElementById("nombre")?.value?.trim() || "",
        from_email: document.getElementById("correo")?.value?.trim() || "",
        from_phone: document.getElementById("telefono")?.value?.trim() || "",
        message: document.getElementById("mensaje")?.value?.trim() || "",
        sent_at: new Date().toLocaleString("es-CO", {
          dateStyle: "full",
          timeStyle: "short",
        }),
      };

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      contactForm.reset();
      if (formStatus) {
        formStatus.textContent = "Gracias. Tu mensaje fue enviado correctamente.";
        formStatus.classList.add("success");
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = "No se pudo enviar el mensaje. Verifica la plantilla en EmailJS e intenta nuevamente.";
        formStatus.classList.add("error");
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar";
      }
    }
  });
}