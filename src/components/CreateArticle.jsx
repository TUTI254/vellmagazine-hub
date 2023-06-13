import NavBar from "../components/NavBar";
import Editor from "../components/Editor";
import { useState } from "react";

const topics = [
  "PETS/ANIMALS",
  "SOCIAL MEDIA",
  "PET INFLUENCERS",
  "PETS/ANIMALS IN THE SPOTLIGHT",
  "SOCIAL MEDIA HACKS",
  "ADVICE",
  "INFLUENCERS",
  "TRAVEL",
  "LIFE MATTERS",
  "WEEKEND GETAWAYS",
  "COST OF LIVING",
  "ART",
  "ARTS & CULTURE",
  "FESTIVALS/CELEBRATIONS",
  "FASHION & BEAUTY",
  "WEEKEND GETAWAYS",
  "MUSIC",
  "PROBLEMS WITH SOCIAL MEDIA",
  "STYLE",
  "WELLBEING",
  "MENTAL HEALTH",
  "PHYSICAL HEALTH",
  "CINEMA",
  "BOOKS",
  "CELEBRITY FASHION",
  "TRENDS",
  "SKIN",
  "TECHNOLOGY",
  "HOLIDAY DESTINATIONS",
  "CLOTHING",
];

export default function CreateArticle() {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicChange = (event) => {
    const selectedTopic = event.target.value;
    if (!selectedTopics.includes(selectedTopic)) {
      setSelectedTopics([...selectedTopics, selectedTopic]);
    } else {
      setSelectedTopics(
        selectedTopics.filter((topic) => topic !== selectedTopic)
      );
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-serif">
        <div className="max-w-5xl w-full space-y-8  border-0  p-12 shadow-xl">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Create Article
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Article Title
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Article Subtitle
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Article Content
                    </label>
                    <div className="mt-2">
                      <Editor value="" onChange="" />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Article Image
                    </label>
                    <div className="mt-2">
                      <input
                        id="image"
                        name="image"
                        type="file"
                        autoComplete="off"
                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleImageChange}
                      />
                    </div>
                    {selectedImage && (
                      <div className="mt-2">
                        <img
                          src={selectedImage}
                          alt="Article Preview"
                          className="max-w-xs mx-auto"
                        />
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="topics"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Article Topics
                    </label>
                    <div className="mt-2">
                      <select
                        id="topics"
                        name="topics"
                        autoComplete="off"
                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleTopicChange}
                      >
                        <option value="">Select a topic</option>
                        {topics.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>
                    {selectedTopics.length > 0 && (
                      <div className="mt-2">
                        {selectedTopics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
                          >
                            {topic}
                            <button
                              type="button"
                              className="ml-2 text-red-500 hover:text-red-700"
                              onClick={() =>
                                setSelectedTopics(
                                  selectedTopics.filter((t) => t !== topic)
                                )
                              }
                            >
                              x
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Article Template
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="number"
                        autoComplete="email"
                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
