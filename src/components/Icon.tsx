const Icon = ({ props }) => {
  const { name, website, desc } = props;
  const light = false;
  return (
    <a href={website} target="_blank">
      <img src={light ? `/logos/light/${name}.svg` : `/logos/dark/${name}.svg`} className="logo" alt={desc} />
    </a>
  )
}

export default Icon;