# ffmpeg -live_start_index 0 -ss 00:01:00.00 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -ss 00:00:10.00 -t 00:00:5.000 output.mp4
# ffmpeg -sseof -5 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -c copy output.mp4
 #ffmpeg -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -c copy -bsf:a aac_adtstoasc output.mp4
# ffmpeg -live_start_index 0 -sseof -5 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 output.mp4
# ffmpeg -sseof -5 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -c copy output.mp4
# ffmpeg -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -c copy -f segment -segment_time 60 -segment_wrap 2 -reset_timestamps 1 out%02d.mkv -y
# ffmpeg -y -t 5 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -c copy output.mkv
# ffmpeg -live_start_index 0 -ss 00:01:00.00 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -ss 00:00:10.00 -t 00:00:5.000 output_index.mp4
# ffmpeg -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -ss 00:00:10.00 -t 00:00:5.000 output_plain.mp4
# ffmpeg -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -ss 00:00:0.00 -t 00:00:5.000 output_plain.mp4 -y
# ffmpeg -live_start_index -1 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -ss 00:00:00.00 -t 00:00:5.000 output.mp4 -y
# ffmpeg -live_start_index 10 -sseof -10 -t 5 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 output.mp4 -y
# ffmpeg -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -t 5 output.mp4 -y
# ffmpeg -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 -ss 00:00:00.00 -t 00:00:5.000 output_plain.mp4 -y
ffmpeg -live_start_index 1 -sseof -20 -t 20 -i https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8 output.mp4 -y