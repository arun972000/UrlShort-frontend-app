import axios from "axios";
import { useState } from "react";
import { Url } from "../Url";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const UrlShortener = () => {
  const [OriginalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic URL validation
    if (!isValidUrl(OriginalUrl)) {
      setShortenedUrl("Please enter a valid URL.");
      return;
    }

    try {
      const response = await axios.post(`${Url}api/UrlAdd`, { OriginalUrl });
      if (response.data && response.data.ShortenedUrl) {

        setShortenedUrl(response.data.ShortenedUrl);

      } else {
        console.log(response.data)
        setShortenedUrl("An error occurred while shortening the URL.");
      }
    } catch (error) {
      console.error(error);
      setShortenedUrl("An error occurred while shortening the URL.");
    }
  };
  const handleCopyClick = () => {
    try {
      navigator.clipboard.writeText(shortenedUrl);
      toast.success('URL copied to clipboard', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error('Failed to copy URL: ', err);
      toast.error('Failed to copy URL. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const isValidUrl = (url) => {
    // Basic URL format validation (you can use a library like valid-url for more robust validation)
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };

  return (
    <div className="container mt-5">
      <h1>URL Shortener</h1>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="originalUrl">Enter the URL to shorten:</label>
          <input
            type="url"
            className="form-control"
            id="originalUrl"
            placeholder="https://example.com"
            value={OriginalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Shorten URL
        </button>
      </form>
      {shortenedUrl && (
        <div className="mt-3">
          <p>Shortened URL:</p>
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              onClick={handleCopyClick}
            >
              Copy URL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
