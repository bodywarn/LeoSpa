import { useState } from "react";
import "./VideoModal.scss";

const VideoModal = ({ videoUrl, buttonText = "Watch Video" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="video-modal">
            <button className="btn-secondary" onClick={openModal}>
                ▶ {buttonText}
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="video-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                src={videoUrl+"?autoplay=1"}
                                title="Video"
                                allow="autoplay;"
                            ></iframe>
                        </div>
                    </div>

                    <button className="modal-close" onClick={closeModal}>
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoModal;
