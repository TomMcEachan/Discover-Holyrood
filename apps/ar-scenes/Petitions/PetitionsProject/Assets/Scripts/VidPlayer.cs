using UnityEngine;
using UnityEngine.Video;
using Lean.Touch;


public class VidPlayer : MonoBehaviour
{
    [SerializeField] 
    string videoFileName;

    [SerializeField]
    bool isPlaying = false;

    [SerializeField]
    VideoPlayer player;

    [SerializeField]
    GameObject playButton;

   

    public void PlayVideo(VideoPlayer videoPlayer)
    {   
        if (videoPlayer) {
            string videoPath = System.IO.Path.Combine(Application.streamingAssetsPath, videoFileName);
            Debug.Log(videoPath);
            videoPlayer.url = videoPath;
            playButton.SetActive(false);
            videoPlayer.Play();
        }

    }

    public void StopVideo(VideoPlayer videoPlayer)
    {  
        if (videoPlayer) {
            videoPlayer.Stop();
            playButton.SetActive(true);
        }
    }

  

}

