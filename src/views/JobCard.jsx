import React from "react";
import classnames from "classnames";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

const JobCard = ({data, width, classes, maxWidth, fullWidth = true}) => {
    return (
        <div className={classnames(
            `p-6 bg-white rounded rounded-lg border border-light`,
            {
                [classes]: classes,
                [width]: width,
                [`max-w-${maxWidth}`]: !!maxWidth,
                "w-full": fullWidth
            }
        )}>
            <div className={"block md:flex"}>
                <div>
                    {data?.logo && (
                        <Avatar imgSrc={data.logo} size={48} variant={"rounded"}/>
                    )}
                </div>
                <div className={"w-full md:px-2"}>
                    <div>
                        <Typography variant={"h1"} as={"h1"}>{data?.role}</Typography>
                        <Typography variant={"subtitle1"}>{data?.company}</Typography>
                        <Typography variant={"secondaryText"}>{data?.address}</Typography>
                    </div>
                    <div className={"py-6 min-h-400"}>
                        <Typography gutterBottom={true}>{data?.timing}</Typography>
                        <Typography gutterBottom={true}>{data?.experience}</Typography>
                        <Typography gutterBottom={true}>{data?.salary}</Typography>
                        <Typography gutterBottom={true}>{data?.employees}</Typography>
                    </div>
                    <div>
                        <Button classes={"mr-6"} size="sm" textColor="white" colour="blue">Apply Now</Button>
                        <Button size="sm" variant="outlined" colour="blue">External Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;