import {gsap, Power0} from "gsap";

export const tl = gsap.timeline();

export const loadPage = (svgRef, buttonsRef, texRef) => {
  tl.to([svgRef.current.children[2], svgRef.current.children[3]], {
    delay: 0.3,
    duration: 1,
    x: 3,
  })
    .to([svgRef.current.children[2], svgRef.current.children[3]], {
      duration: 1,
      x: -2,
    })
    .to([svgRef.current.children[2], svgRef.current.children[3]], {
      duration: 1,
      x: 0,
    })
    .to(svgRef.current, {
      css: {
        animation: "logo1 4s forwards ",
      }
    })
    .set(svgRef.current, {
      css: {
        top: `calc(50% - ${svgRef.current.parentNode.getBoundingClientRect().top}px)`,
        left: `calc(50% - ${svgRef.current.parentNode.getBoundingClientRect().left}px)`,
      }
    })
    .to(svgRef.current, {
      duration: "4",
      css: {
        position: "relative",
        top: "13px",
        left: "22px",
        width: "38px",
        height: "26px"
      }
    })
    .set(".page", {
      maxHeight: "none"
    })
    .to(texRef.current, {
      duration: "0.5",
      css: {
        opacity: "1"
      }
    })
    .to(buttonsRef.current, {
      duration: "0.5",
      css: {
        opacity: "1"
      }
    });
};

export const loadTitle = (headerRef, paragraphRef, buttonRef, titleRef) => {

  const pair = [...paragraphRef.current?.children].filter((el, idx) => idx % 2 === 0);
  const unpair = [...paragraphRef.current?.children].filter((el, idx) => idx % 2 !== 0);

  tl.set(buttonRef.current, {
    opacity: 0,
  }).set(pair, {
    opacity: 0,
  }).set(unpair, {
    opacity: 0,
  }).to(titleRef.current.parentNode, {
    duration: "1",
    ease: Power0.easeOut,
    opacity: 1
  }).then(result => {
    gsapFromTo(pair, {x: -50,}, {duration: 1.3, x: 0});
    gsapFromTo(unpair, {x: 50}, {duration: 1.3, x: 0});
    result.fromTo(headerRef.current.children, {
      opacity: 0,
      top: 20,
      left: 50
    }, {
      opacity: 1,
      stagger: {
        each: 0.03
      },
      top: 0,
      left: 1,
      duration: 0.4,
    }).to(buttonRef.current, {
      opacity: 1,
    });
  });
};


export const loadUsers = (userContRef) => {
  gsap.to(userContRef.current.children, {
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    x: 0,
    scale: 1,
  });
};

export function gsapFromTo(el, from, to) {
  gsap.fromTo(el, {
    opacity: 0,
    ...from
  }, {
    opacity: 1,
    stagger: {
      each: 0.03
    },
    ...to
  });
}