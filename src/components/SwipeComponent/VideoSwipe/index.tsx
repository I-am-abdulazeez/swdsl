import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ShayoVideos } from "@data/index";
import { SVideos } from "@interfaces/index";

const VideoSwipe: React.FC = () => {
  return (
    <Box mt="4rem">
      <Swiper
        autoplay={{
          delay: 43000,
        }}
      >
        {ShayoVideos.map(({ videoId, videoUrl }: SVideos) => (
          <SwiperSlide key={videoId}>
            <video
              loop
              autoPlay
              style={{
                maxWidth: "100%",
                height: "100%",
                width: "100%",
              }}
              muted
            >
              <source src={videoUrl} />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default VideoSwipe;
