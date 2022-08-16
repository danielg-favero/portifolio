import React, { useEffect, useState } from 'react'

import httpServices from '../../services/http'

// Isso é somente para fins didáticos
const Exemplo: React.FC = () => {
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    const getUser = async () => {
      const { data } = await httpServices.user.getUserById({ id: 'user-id' })
      setUserName(data.name)
    }
    getUser()
  }, [])

  return <div>{userName}</div>
}

export default Exemplo
