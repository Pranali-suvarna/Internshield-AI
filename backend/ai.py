# import os
# import json
# import google.generativeai as genai
# from dotenv import load_dotenv

# load_dotenv()

# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# model = genai.GenerativeModel("gemini-2.5-flash")


# def analyze_internship(description):
#     prompt = f"""
# You are an internship scam detection AI.

# Analyze the internship description below.

# Return ONLY valid JSON.

# Format:
# {{
#     "risk_score": 0,
#     "trust_score": 0,
#     "status": "",
#     "red_flags": [],
#     "recommendation": ""
# }}

# Internship Description:
# {description}
# """

#     response = model.generate_content(prompt)

#     try:
#         return json.loads(response.text)
#     except:
#         return {
#             "risk_score": 50,
#             "trust_score": 50,
#             "status": "Unknown",
#             "red_flags": ["Unable to analyze response"],
#             "recommendation": response.text,
#         }


import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def analyze_internship(description):
    prompt = f"""
You are an internship scam detection AI.

Return ONLY valid JSON.
Do NOT use markdown.
Do NOT use ```json.

Format:
{{
    "risk_score": 0,
    "trust_score": 0,
    "status": "",
    "red_flags": [],
    "recommendation": ""
}}

Internship Description:
{description}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown code fences if present
    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()

    elif text.startswith("```"):
        text = text.replace("```", "").strip()

    return json.loads(text)