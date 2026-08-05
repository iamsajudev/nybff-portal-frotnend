// src/components/Dashboard/Project/Step6Payment.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Loader2,
  ArrowLeft,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Step6Payment({
  formData,
  onSubmit,
  onPrev,
  isSubmitting,
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      // Call the parent submit handler with no payment intent
      await onSubmit(null);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err.message || "Submission failed. Please try again.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#1f2937",
          color: "#fff",
          borderRadius: "12px",
          border: "1px solid #ef4444",
        },
      });
      setError(err.message || "Submission failed. Please try again.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-linear-to-br from-[#1EB97A] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#1EB97A]/30"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold bg-linear-to-r from-[#1EB97A] to-emerald-500 bg-clip-text text-transparent mb-3">
          Submission Successful! 🎉
        </h3>
        <p className="text-gray-400 mb-2">
          Your project has been submitted successfully!
        </p>
        <p className="text-sm text-gray-500">
          You will receive a confirmation email shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header Section */}
      <div className="text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-[#1EB97A]/20 to-emerald-500/20 border border-[#1EB97A]/30 text-[#1EB97A] text-xs font-semibold mb-4">
          <span className="w-2 h-2 bg-[#1EB97A] rounded-full animate-pulse"></span>
          Final Step - Step 7 of 7
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-14 h-14 bg-linear-to-br from-[#1EB97A] to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#1EB97A]/20">
            <FileCheck className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Review & Submit
            </h2>
            <p className="text-gray-400 mt-1">
              Review your project details before submitting
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              Free Submission
            </span>
          </div>
          <p className="text-xs text-blue-300">No payment required</p>
        </div>
        <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">
              Quick Review
            </span>
          </div>
          <p className="text-xs text-purple-300">5-7 business days</p>
        </div>
        <div className="bg-linear-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">
              Global Exposure
            </span>
          </div>
          <p className="text-xs text-amber-300">Reach wider audience</p>
        </div>
      </div>

      {/* Project Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
      >
        <h3 className="text-lg font-semibold text-white mb-4">
          Project Summary
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Project Title</span>
            <span className="text-white font-medium">
              {formData.projectTitle || "Not specified"}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Project Type</span>
            <span className="text-white font-medium">
              {formData.projectType || "Not specified"}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Submitter</span>
            <span className="text-white font-medium">
              {formData.email || "Not specified"}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-700">
            <span className="text-gray-400">Genre</span>
            <span className="text-white font-medium">
              {formData.genres || "Not specified"}
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-400">Status</span>
            <span className="text-[#1EB97A] font-medium">Ready to Submit</span>
          </div>
        </div>
      </motion.div>

      {/* Info Box */}
      <div className="bg-linear-to-r from-[#1EB97A]/10 to-emerald-500/10 rounded-xl p-5 border border-[#1EB97A]/20">
        <div className="flex items-start gap-3">
          <FileCheck className="w-5 h-5 text-[#1EB97A] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-[#1EB97A] font-medium">
              Ready to Submit
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Your project submission is complete and ready for review. Click
              "Submit Project" to finalize your submission. You will receive a
              confirmation email after submission.
            </p>
          </div>
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-4"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-between gap-4 pt-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="flex items-center gap-2 px-8 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-semibold hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="group flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#1EB97A] to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg shadow-[#1EB97A]/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <ArrowRight className="w-4 h-4" />
              Submit Project
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
