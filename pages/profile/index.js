import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import ProfileNav from '../../components/ProfileNav'
import Image from 'next/image'
import profile from '../../images/about1.png'
import { FiEdit3, FiLogOut } from 'react-icons/fi'

const index = () => {
  return (
    <Layout>

      <Head>
        <title>My Profile | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Profile', active: true }]} />
        </Container>
        <h1 className={'text-center pt-4'}>Profile</h1>
        <div className={'text-center pb-5'}>See your notifications for the latest updates</div>
      </div>
      <Container className='mb-5'>
        <ProfileNav />
        <div className='d-flex flex-row'>
          <div className='ms-4 my-5 d-inline position-relative '>
            <Image
              id="profile-image"
              alt="{auth?.fullName}"
              src={profile}
              width="80"
              height="80"
              className="rounded-circle mx-auto d-block"
            />
            <div className='position-absolute d-flex flex-row text-light text-outline-primary top-50' >
              <div>&nbsp;&nbsp;&nbsp;Edit </div>
              <FiEdit3 size={20} />
            </div>
          </div>
          <div className='my-5 py-2 ms-5'>
            <h5>Syifa</h5>
            <div>as seller</div>
          </div>
        </div>

        <div className='border border-3 border-bottom-0 px-3 pt-3'>
          <Form.Label className='px-3'><p>Gender :</p></Form.Label>
          <Form.Select className='border-0' size="lg">
            <option value={'Male'}>Male</option>
            <option value={'Female'}>Female</option>
            <option value={'Others'}>Others</option>
          </Form.Select>
        </div>
        <div className='border border-3 border-bottom-0 px-3 pt-3'>
          <Form.Label className='px-3'><p>Your Email :</p></Form.Label>
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email"
            className='me-5 pb-3 border-0 form-color2'
            defaultValue="mail@mail.com"
            placeholder='Your email address *'
          />
        </div>
        <div className='border border-3 border-bottom-0 px-3 pt-3'>
          <Form.Label className='px-3'><p>Store Name :</p></Form.Label>
          <Input
            type="text"
            id="store"
            name="store"
            aria-describedby="store"
            className='me-5 pb-3 border-0'
            defaultValue="Shopedia"
            placeholder='Your Store'
          />
        </div>
        <div className='border border-3  px-3 pt-3'>
          <p className='px-3'>Store Description :</p>
          <Input
            type="text"
            id="description"
            name="description"
            aria-describedby="description"
            className='me-5 mb-3 border-0'
            defaultValue="This is My Store"
            placeholder='Description Store'
          />
        </div>
        <Button className='mt-4 px-4' variant="color2" size="lg" active>
          <FiLogOut />&nbsp;Logout
        </Button>{' '}
      </Container>
    </Layout >
  )
}
export default index