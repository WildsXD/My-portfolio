function SkillList({src, Skills}) {
  return (
    <span>
    <img src={src} alt='markIcon'/>
    <p>{Skills}</p>
  </span>
  )
}

export default SkillList