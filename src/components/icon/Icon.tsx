import { useRef } from "react"
import { useInView } from "framer-motion"
import "./Icon.css"

// @ts-ignore
const Icon = ({ props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { name, website, desc } = props;
  const light = true;
  return (
    <a ref={ref} href={website} target="_blank">
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "0.3s cubic-bezier(0.17, 0.55, 0.55, .1) .3s"
        }}
      >
        <img src={light ? `/logos/light/${name}.svg` : `/logos/dark/${name}.svg`} className="logo" alt={desc} />
      </span>
    </a>
  )
}

export default Icon;