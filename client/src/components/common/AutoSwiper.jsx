
import { Box } from "@mui/material";
import { Swiper } from "swiper/react";

const AutoSwiper = ({ children }) => {
  return (
    <Box sx={{
      "& .swiper-slide": {
        width: {
          xs: "50%",
          sm: "35%",
          md: "25%",
          lg: "15.5%"
        }
      }
    }}>
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        spaceBetween={16} // Задайте значение, которое вам нужно для расстояния между слайдами
        style={{ width: "100%", height: "max-content" }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;