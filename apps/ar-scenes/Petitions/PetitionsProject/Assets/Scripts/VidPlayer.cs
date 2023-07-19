using UnityEngine;
using UnityEngine.Video;
using Lean.Touch;

public class VidPlayer : MonoBehaviour
{
    [SerializeField] 
    string videoFileName;

    bool isPlaying = false;

    void OnEnable()
    {
        LeanTouch.OnFingerTap += HandleFingerTap;
    }

    void OnDisable()
    {
        LeanTouch.OnFingerTap -= HandleFingerTap;
    }

    void HandleFingerTap(LeanFinger finger)
    {
        if (!isPlaying) {
            PlayVideo();
        } else {
            StopVideo();
        }
    }

    public void PlayVideo()
    {
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();

        if (videoPlayer) {
            string videoPath = System.IO.Path.Combine(Application.streamingAssetsPath, videoFileName);
            Debug.Log(videoPath);
            videoPlayer.url = videoPath;
            videoPlayer.Play();
            isPlaying = true;
        }

    }

    public void StopVideo()
    {
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();

        if (videoPlayer) {
            videoPlayer.Stop();
            isPlaying = false;
        }
    }

}

