from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai import analyze_internship

app = FastAPI(title="InternShield AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class InternshipRequest(BaseModel):
    description: str


@app.get("/")
def home():
    return {"message": "InternShield AI Backend 🚀"}


@app.post("/analyze")
def analyze(request: InternshipRequest):
    return analyze_internship(request.description)