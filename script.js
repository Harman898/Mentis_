function downloadPDF(lang) {
    // Percorsi corretti dei PDF (verifica che i nomi siano ESATTI)
    const pdfs = {
        html: "html.pdf",
        css: "css.pdf",
        javascript: "javascript.pdf",
        cpp: "cpp.pdf",
        python: "python.pdf"
    };

    // Crea un link temporaneo
    const link = document.createElement('a');
    
    // Verifica che il PDF esista
    if (!pdfs[lang]) {
        console.error("PDF non trovato per il linguaggio:", lang);
        return;
    }

    link.href = pdfs[lang]; 
    link.download = pdfs[lang]; // Forza il download invece di aprirlo
    link.target = "_blank"; // Apre in una nuova scheda (opzionale)
    
    // Simula il click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}