import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd'
import renderRoutes from '../utils/render-routes';
import matchRoutes from '../utils/match-routes';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutSuccessAction } from '../redux/actions/user';
import iconPic from '../images/icon.png'
import pullPic from '../images/pull.png'

const { Header, Sider, Content } = Layout;

const SiderDemo = (props) => {

const haveHeaderUrl = JSON.parse(localStorage.getItem('headerUrl'))
const haveHeaderTitle = JSON.parse(localStorage.getItem('headerTitle'))
// const haveUnChangeUrl = JSON.parse(localStorage.getItem('unChangeUrl'))

const [headerUrl, setHeaderUrl] = useState(haveHeaderUrl ? haveHeaderUrl : ['数据统计','用户统计'])

const [headerTitle, setHeaderTitle] = useState(haveHeaderTitle ? haveHeaderTitle :'用户统计')

// const [unChangeUrl, setUnChangeUrl] = useState(haveUnChangeUrl ? haveUnChangeUrl :['/statistics', '/statistics/usersSta'])


const [openKeys, setOpenKeys] = useState([])

const [selectedKeys, setSelectedKeys] = useState(['/statistics/usersSta'])

const { history, route, location: { pathname } } = props

const dispatch = useDispatch()

const {userInfo, token} = useSelector(state => state.user)

useEffect(() => {

  const routes = matchRoutes(route.children, pathname)
  // console.log(routes)
  if (routes.length !== 0) setSelectedKeys([routes.pop().route.path])
  // setSelectedKeys([routes.pop().route.path])
  setOpenKeys(routes.map(r => r.route.path))
},[pathname, route.children])


useEffect(() => {
  localStorage.setItem('headerUrl', JSON.stringify(headerUrl))
},[headerUrl])


useEffect(() => {
  localStorage.setItem('headerTitle', JSON.stringify(headerTitle))
},[headerTitle])


// useEffect(() => {
//   localStorage.setItem('unChangeUrl', JSON.stringify(unChangeUrl))
// },[unChangeUrl])


const signOut = useCallback(() => {
  dispatch(logoutSuccessAction())
},[dispatch])


const userMenu = useMemo(() => {
  return (
    <Menu>
      <Menu.Item key="0">
        <span onClick={signOut}>Logout</span>
      </Menu.Item>
    </Menu>
  )
},[signOut])




const handleLink = useCallback(({key, keyPath}) => {
  history.push(key)
  // setUnChangeUrl([keyPath[1], key])
  const text1 = route.children.filter(item => {
    // console.log(item.path, key, keyPath)
    return item.path === keyPath[1]
  })
  // setHeaderTitle()
  const text2 = text1[0].children.filter(item => {
    // console.log(item.path)
    return item.path === key

    // console.log(item.meta.title)
  })
  setHeaderUrl([
    text1[0].meta.title,
    text2[0].meta.title
  ])
  setHeaderTitle(text2[0].meta.title)
  // console.log(text[0].children.forEach(item => {
  //   console.log(item.meta.title)
  // }))
  // console.log(headerUrl)
  // setHeaderUrl(key)

},[history, route.children])

const handleOpenChange = useCallback((openKeys) => {
  setOpenKeys(openKeys)
},[])


const renderMenu = useMemo(() => {
  // console.log(route)
  // console.log(unChangeUrl[1],unChangeUrl[0])
  return (
    <Menu
      theme="dark"
      mode="inline"
      // defaultSelectedKeys={[unChangeUrl[1]]} 
      defaultOpenKeys={['/home']}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onClick={handleLink}
      onOpenChange={handleOpenChange}
      >
        {
          route.children.map(item => {
            // console.log(item.path)
            return <Menu.SubMenu key={item.path} icon={<item.meta.icon />} title={item.meta.title}>
            {item.children.map(element => {
              return <Menu.Item key={element.path}><div className='ct'>{element.meta.title}</div></Menu.Item>
            })}
          </Menu.SubMenu> 
          })
        }
    </Menu>
  )
},[handleLink, route.children, selectedKeys, openKeys, handleOpenChange])


const renderHeader = useMemo(() => {
  return(
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          headerUrl.map((item, index) => {
            return (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
      <span className='header-title'>{headerTitle}</span>
      
      <Dropdown overlay={userMenu} trigger={['click']}>
        <div className='userName'>
          <img src={iconPic} width="20px" alt="" />
          <span>{userInfo?.username}<img src={pullPic} alt="" style={{marginLeft: '6px'}} /></span>
        </div>
      </Dropdown>
      
    </Header>
  )
},[headerTitle, headerUrl])

  return !token ? <Redirect to={'/login'} /> : (
    <Layout className='frame-layout'>
      {/* Sider */}
      <Sider trigger={null} collapsible collapsed={false}>
        <div className='box'></div>
        <div className="logo">
          <img src={iconPic}  width="40px" alt="" />
        </div>
        {/* Menu */}
        {renderMenu}
      </Sider>
      <Layout className="site-layout">
        {/* Header */}
        {renderHeader}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* Content */}
          {renderRoutes(route.children)}
        </Content>
      </Layout>
    </Layout>
  )
}

export default SiderDemo
