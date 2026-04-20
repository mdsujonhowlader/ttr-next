"use client";

import { useState } from "react";
import { updateAppearance } from "@/actions/appearanceAction";
import { Button, Field, Input, Label } from "@headlessui/react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Save, Palette, ImageIcon, Globe, Mail, Phone, MapPin } from "lucide-react";
import AllFileGellary from "../gallery/AllFileGellary";

const tabs = [
  { id: "colors", label: "Colors", icon: Palette },
  { id: "logo", label: "Logo & Branding", icon: ImageIcon },
  { id: "contact", label: "Contact Info", icon: Phone },
];

export default function SettingsWrapper({ safeImages, getAppearances }) {
  const [activeTab, setActiveTab] = useState("colors");
  const [showGallery, setShowGallery] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(getAppearances?.headerLogo || "");
  const [saving, setSaving] = useState(false);

  function handleImageSelect(image) {
    setSelectedLogo(image.url);
    setShowGallery(false);
  }

  async function handleSubmit(formData) {
    setSaving(true);
    try {
      await updateAppearance(formData);
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error("Failed to update settings");
    }
    setSaving(false);
  }

  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={handleImageSelect}
        showGallery={showGallery}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your site appearance and configurations
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <form action={handleSubmit} className="p-6">
            {activeTab === "colors" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Primary Color
                    </Label>
                    <div className="mt-2 flex gap-3">
                      <input
                        type="color"
                        name="value[]"
                        defaultValue={getAppearances?.primaryColor || "#3b82f6"}
                        className="w-12 h-12 rounded-lg cursor-pointer border-0"
                      />
                      <Input
                        name="type[]"
                        type="text"
                        value="primaryColor"
                        hidden
                        readOnly
                      />
                      <Input
                        name="value[]"
                        type="text"
                        defaultValue={getAppearances?.primaryColor || "#3b82f6"}
                        className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                      />
                    </div>
                  </Field>

                  <Field>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Secondary Color
                    </Label>
                    <div className="mt-2 flex gap-3">
                      <input
                        type="color"
                        name="value[]"
                        defaultValue={getAppearances?.secondaryColor || "#10b981"}
                        className="w-12 h-12 rounded-lg cursor-pointer border-0"
                      />
                      <Input
                        name="type[]"
                        type="text"
                        value="secondaryColor"
                        hidden
                        readOnly
                      />
                      <Input
                        name="value[]"
                        type="text"
                        defaultValue={getAppearances?.secondaryColor || "#10b981"}
                        className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                      />
                    </div>
                  </Field>

                  <Field>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Accent Color
                    </Label>
                    <div className="mt-2 flex gap-3">
                      <input
                        type="color"
                        name="value[]"
                        defaultValue={getAppearances?.accentColor || "#8b5cf6"}
                        className="w-12 h-12 rounded-lg cursor-pointer border-0"
                      />
                      <Input
                        name="type[]"
                        type="text"
                        value="accentColor"
                        hidden
                        readOnly
                      />
                      <Input
                        name="value[]"
                        type="text"
                        defaultValue={getAppearances?.accentColor || "#8b5cf6"}
                        className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                      />
                    </div>
                  </Field>

                  <Field>
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Background Color
                    </Label>
                    <div className="mt-2 flex gap-3">
                      <input
                        type="color"
                        name="value[]"
                        defaultValue={getAppearances?.bgColor || "#ffffff"}
                        className="w-12 h-12 rounded-lg cursor-pointer border-0"
                      />
                      <Input
                        name="type[]"
                        type="text"
                        value="bgColor"
                        hidden
                        readOnly
                      />
                      <Input
                        name="value[]"
                        type="text"
                        defaultValue={getAppearances?.bgColor || "#ffffff"}
                        className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                      />
                    </div>
                  </Field>
                </div>
              </div>
            )}

            {activeTab === "logo" && (
              <div className="space-y-6">
                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Header Logo
                  </Label>
                  <Input
                    name="type[]"
                    type="text"
                    value="headerLogo"
                    hidden
                    readOnly
                  />
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setShowGallery(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <ImageIcon className="w-4 h-4" />
                      Choose from gallery
                    </button>
                    <input
                      name="value[]"
                      type="text"
                      value={selectedLogo}
                      hidden
                      readOnly
                    />
                  </div>
                  <div className="mt-4 relative w-full max-w-sm h-32 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600">
                    <Image
                      src={selectedLogo || getAppearances?.headerLogo || "/placeholder.png"}
                      alt="Header Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </Field>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Contact Email
                  </Label>
                  <Input
                    name="type[]"
                    type="text"
                    value="contactEmail"
                    hidden
                    readOnly
                  />
                  <Input
                    name="value[]"
                    type="email"
                    defaultValue={getAppearances?.contactEmail || ""}
                    placeholder="contact@example.com"
                    className="mt-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                  />
                </Field>

                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    name="type[]"
                    type="text"
                    value="contactPhone"
                    hidden
                    readOnly
                  />
                  <Input
                    name="value[]"
                    type="tel"
                    defaultValue={getAppearances?.contactPhone || ""}
                    placeholder="+1 (555) 123-4567"
                    className="mt-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                  />
                </Field>

                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Address
                  </Label>
                  <Input
                    name="type[]"
                    type="text"
                    value="contactAddress"
                    hidden
                    readOnly
                  />
                  <Input
                    name="value[]"
                    type="text"
                    defaultValue={getAppearances?.contactAddress || ""}
                    placeholder="123 Main Street, City, Country"
                    className="mt-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                  />
                </Field>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}