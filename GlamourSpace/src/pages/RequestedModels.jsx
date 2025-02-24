import React, { useEffect, useState } from 'react'

export default function RequestedModels() {
  const [reqModels, setReqModels] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getReqModels = async () => {
    try {
      setLoading(true)
      const response  = await fetch("/api/inventory/getReqModels")
      const data = await response.json();
      console.log(data);
      if (data.success == false) {
        setError(data.message);
        setLoading(false)
        return
      }
      setReqModels(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getReqModels()
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-wrap gap-4 p-4 justify-center">
      {reqModels.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md p-4 w-64 h-32"
        >
          <p>
            <span className="font-semibold">Username:</span> {item.username}
          </p>
          <p>
            <span className="font-semibold">Model:</span> {item.model}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{' '}
            {item.description || 'N/A'}
          </p>
        </div>
      ))}
    </div>
  )
}
