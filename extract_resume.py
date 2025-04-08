import PyPDF2
import json
import os

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file"""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text

# Paths to the resume PDFs
resume_paths = [
    "/home/ubuntu/upload/AI Engineer - Internship-SaharHarati (1).pdf",
    "/home/ubuntu/upload/Sahar Harati.pdf"
]

# Extract text from both PDFs
resume_data = {}
for i, path in enumerate(resume_paths):
    filename = os.path.basename(path)
    resume_data[filename] = extract_text_from_pdf(path)

# Save the extracted text to a JSON file
with open('/home/ubuntu/website/resume_data.json', 'w') as f:
    json.dump(resume_data, f, indent=2)

print("Resume data extracted and saved to resume_data.json")
