import os
from moviepy.editor import VideoFileClip, concatenate_videoclips
from tensorflow.keras.models import load_model
import cv2
import numpy as np

# Use um caminho absoluto
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model', 'video_model.h5')

def save_video(video_file):
    video_path = os.path.join('uploads', video_file.filename)
    video_file.save(video_path)
    return video_path

def preprocess_video(video_path):
    cap = cv2.VideoCapture(video_path)
    frames = []
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, (224, 224))  # Redimensionar frame
        frame = frame / 255.0  # Normalizar frame
        frames.append(frame)
    
    cap.release()
    return np.array(frames)

def generate_reel(video_path):
    model = load_model(MODEL_PATH)
    video_data = preprocess_video(video_path)
    predictions = model.predict(video_data)
    
    # Exemplos de clipes baseados em predições (ajuste conforme necessário)
    clip = VideoFileClip(video_path)
    subclips = [clip.subclip(0, 10), clip.subclip(20, 30)]
    final_clip = concatenate_videoclips(subclips)
    
    reel_path = os.path.join('reels', f'reel_{os.path.basename(video_path)}')
    final_clip.write_videofile(reel_path, codec="libx264")
    return reel_path