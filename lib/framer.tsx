import { easeIn, easeOut } from "framer-motion";

export const slideCard = {
    initial: {
        x: -75,
        y: -75,
        scale: 0.75,
    },
    animate: (i: number) => ({
        x: 0,
        y: 0,
        transition: { duration: 0.25, delay: i * 0.15, easeIn },
        scale: 1,
    }),
    exit: {
        x: -75,
        y: -75,
        transition: { duration: 0.25, easeOut },
        scale: 0.75,
    },
};

export const slideLeftSide = {
    initial: {
        opacity: 0,
        x: "-60px",
    },
    animate: () => ({
        opacity: 1,
        x: "0",
        transition: { duration: 0.5, delay: 0.15, easeIn },
    }),
    exit: {
        opacity: 0,
        x: "-60px",
    },
};

export const slideRightSide = {
    initial: {
        opacity: 0,
        x: "60px",
    },
    animate: () => ({
        opacity: 1,
        x: "0",
        transition: { duration: 0.5, delay: 0.15, easeIn },
    }),
    exit: {
        opacity: 0,
        x: "60px",
    },
};


export const smallslideup = {
    initial: {
        opacity: 0,
        y: "42px",
    },
    animate: (i: number) => ({
        opacity: 1,
        y: "0",
        transition: { duration: 0.4, delay: i * 0.05, easeIn },
    }),
    exit: {
        opacity: 0,
        y: "42px",
    },
};

export const slideup = {
    initial: {
        opacity: 0,
        y: "50px",
    },
    animate: (i: number) => ({
        opacity: 1,
        y: "0",
        transition: { duration: 0.5, delay: i * 0.05, easeIn },
    }),
    exit: {
        opacity: 0,
        y: "50px",
    },
};



export const scaleAnimations = {
    initial: { scale: 0, x: "-50%", y: "0%", opacity: 0 },
    animate: {
        scale: 1,
        x: "0%",
        y: "0%",
        opacity: 1,
        transition: { duration: 0.25, easeIn },
    },
    exit: {
        scale: 0,
        x: "-50%",
        y: "0%",
        opacity: 0,
        transition: { duration: 0.25, easeOut },
    },
};


export const imageScale = {
    initial: {
        scale: 0.5,
        z: 0,
    },
    animate: {
        scale: 1,
        z: 150,
        transition: {
            duration: 0.5,
            easeIn
        },
    },
    exit: {
        scale: 0.5,
        z: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            easeOut
        },
    },
};


export const slide = {
    initial: {
        y: "100vh",
    },
    enter: {
        y: "100vh",
    },
    exit: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};
