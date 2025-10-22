"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Wrapper from "../components/Wrapper";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Validation côté client
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Nettoyer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }

    // Nettoyer le message de statut
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Une erreur est survenue lors de l'envoi.",
        });
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setSubmitStatus({
        type: "error",
        message: "Impossible de se connecter au serveur. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <section id="competences" className="text-base-content">
        <div className="container mx-auto px-2 sm:px-4 lg:px-10">
          {/* === Titre principal === */}
          <div className="text-center mb-10 mt-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Me <span className="text-primary">Contacter</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-base-content/80 font-medium max-w-2xl mx-auto">
              Une question, un projet ou une collaboration ? N&apos;hésitez pas
              à me laisser un message !
            </p>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-base-200 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col gap-4"
            noValidate
          >
            {/* Message de statut */}
            {submitStatus.type && (
              <div
                className={`alert ${
                  submitStatus.type === "success"
                    ? "alert-success"
                    : "alert-error"
                }`}
              >
                <span>{submitStatus.message}</span>
              </div>
            )}

            {/* Champ Nom */}
            <div className="form-control w-full">
              <label htmlFor="name" className="label">
                <span className="label-text">Nom complet</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.name ? "input-error" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.name}
                  </span>
                </label>
              )}
            </div>

            {/* Champ Email */}
            <div className="form-control w-full">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.email}
                  </span>
                </label>
              )}
            </div>

            {/* Champ Message */}
            <div className="form-control w-full">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                className={`textarea textarea-bordered w-full ${
                  errors.message ? "textarea-error" : ""
                }`}
                rows={6}
                disabled={isSubmitting}
              />
              {errors.message && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.message}
                  </span>
                </label>
              )}
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default ContactPage;
