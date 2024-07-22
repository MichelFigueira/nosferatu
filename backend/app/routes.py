import os
from flask import request, jsonify, current_app
from .utils import save_video, generate_reel

@current_app.route('/generate-reel', methods=['POST'])
def generate_reel_route():
    video_file = request.files['video']
    video_path = save_video(video_file)
    reel_path = generate_reel(video_path)
    
    return jsonify({'reelUrl': reel_path})