export const slideLeftSide = {
    initial: {
        opacity: 0,
        x: "-60px",
    },
    animate: () => ({
        opacity: 1,
        x: "0",
        transition: { duration: 0.8, delay: 0.4, },
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
        transition: { duration: 0.8, delay: 0.4, },
    }),
    exit: {
        opacity: 0,
        x: "60px",
    },
};


export const slideup = {
    initial: {
        opacity: 0,
        y: "30px",
    },
    animate: (i: number) => ({
        opacity: 1,
        y: "0",
        transition: { duration: 0.4, delay: i * 0.03, },
    }),
    exit: {
        opacity: 0,
        y: "30px",
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
        transition: { duration: 0.4, delay: i * 0.05, },
    }),
    exit: {
        opacity: 0,
        y: "42px",
    },
};

export const slideup3 = {
    initial: {
        opacity: 0,
        y: "75px",
    },
    animate: () => ({
        opacity: 1,
        y: "0",
        transition: { duration: 1, delay: 0.4 },
    }),
    exit: {
        opacity: 0,
        y: "75px",
    },
};

export const projectCard = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2, delay: 0.5, ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        opacity: 0,
    }
}


export const normalOpacity = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.5,
        },
    },
    exit: {
        opacity: 0,
    },
};

export const scaleAnimations = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    animate: {
        scale: 1,
        x: "0%",
        y: "0%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

export const preloaderAnimations = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: 4 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 4 },
    },
};

export const slidingAnimations = {
    initial: {
        height: "100vh",
    },
    enter: {
        height: "0",
        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        height: "0",
        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
};

export const perspectiveAnimations = {
    initial: {
        scale: 0,
        y: 0,
        opacity: 0,
    },
    enter: {
        scale: 0,
        y: 0,
        opacity: 0,
    },
    exit: {
        scale: 0.9,
        y: 100,
        opacity: 0.8,
        transition: { duration: 3, ease: [0.76, 0, 0.24, 1] },
    },
};

export const perspective = {
    initial: {
        scale: 1,
        y: 0,
    },
    enter: {
        scale: 1,
        y: 0,
    },
    exit: {
        scale: 0.9,
        y: -150,
        opacity: 0.5,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
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


export const imageScale = {
    initial: {
        opacity: 0,
        z: 0
    },
    animate: {
        opacity: 1,
        z: 100,
        transition: {
            duration: 1.5,
            delay: 0.5,
        },
    },
    exit: {
        opacity: 0,
        z: 0
    },
};