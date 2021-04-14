function JobCard({title, equity, salary}) {

  return (
    <div>
      <h2>{title}</h2>
      <p>{equity}</p>
      <p>{salary}</p>
    </div>
  )
}

export default JobCard;