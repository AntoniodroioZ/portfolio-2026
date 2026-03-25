import sys

def extract_text(pdf_path):
    # Try PyMuPDF
    try:
        import fitz
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text() + "\n"
        print("--- PyMuPDF Output ---")
        print(text)
        return
    except ImportError:
        pass
        
    # Try PyPDF2
    try:
        import PyPDF2
        with open(pdf_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
        print("--- PyPDF2 Output ---")
        print(text)
        return
    except ImportError:
        pass

    print("No supported PDF library found (PyMuPDF, PyPDF2). Please install one.")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        extract_text(sys.argv[1])
