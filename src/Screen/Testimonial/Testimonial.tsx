import React from "react";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import TestimonialStyle from "./TestimonialStyle.style";

const Testimonial = () => {
  const classes = TestimonialStyle;

  const swiperParams = {
    modules: [Navigation],
    navigation: true,
    spaceBetween: 2,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  const projectData = [
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },

    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription: "abc",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
  ];

  const getCard = (items: any) => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "100%",
          }}
        >
          <Card sx={{ width: "80%", margin: "0 8px", gap: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {items?.projectOwnerImage}
                </Avatar>
              }
              title={items?.projectName}
              subheader={items?.projectLocation}
            />
            {/* project explanation  */}
            <CardContent
              sx={{
                overflow: "auto",
                maxHeight: "200px",
                height: "200px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {items?.projectDescription}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  Project git link : {items?.projectGitLink}
                  <Typography component={"span"}>git.com</Typography>
                </Typography>
                <Typography>
                  Project live link : {items?.projectLiveLink}
                  <Typography component={"span"}>git.com</Typography>
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </>
    );
  };
  const getRealProject = () => {
    return (
      <Swiper {...swiperParams}>
        {projectData.map((data: any, index: number) => {
          return (
            <>
              <SwiperSlide>{getCard(data)}</SwiperSlide>
            </>
          );
        })}
        ...
      </Swiper>
    );
  };
  const getRealProjectMain = () => {
    return (
      <>
        <Box sx={classes.mainWrapper}>{getRealProject()}</Box>
      </>
    );
  };
  return getRealProjectMain();
};
export default Testimonial;
