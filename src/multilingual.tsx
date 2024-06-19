import React from 'react';

const MultiLingual = () => (
    <section className="mb-8">
        <div className="p-2 bg-blue-200 text-blue-700 rounded">
            <h3 className="text-xl font-semibold mb-2">
                <i className="fa fa-info-circle mr-2"></i> Multilingual Information
            </h3>
            <ul>
                <li>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                        alt="French Flag"
                        className="inline-block h-4 mr-2"
                    />
                    Francophones: le site est pour l'instant uniquement en anglais, vous
                    pouvez utiliser les fonctionnalités de traduction automatique pour le
                    visualiser en français.
                </li>
                <li>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
                        alt="German Flag"
                        className="inline-block h-4 mr-2"
                    />
                    Deutschsprachige: Die Website ist derzeit nur auf Englisch verfügbar.
                    Sie können automatische Übersetzungsfunktionen verwenden, um sie auf
                    Deutsch zu sehen.
                </li>
            </ul>
        </div>
    </section>
);
export default MultiLingual