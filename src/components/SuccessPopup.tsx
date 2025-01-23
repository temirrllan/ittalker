'use client';

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-8 h-8 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-600 mb-6">
                        Мы свяжемся с вами в ближайшее время
                    </p>
                    <button
                        onClick={onClose}
                        className="bg-[#006DFC] text-white px-6 py-2 rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
} 