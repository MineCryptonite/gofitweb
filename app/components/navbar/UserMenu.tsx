'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import { useRouter } from "next/navigation";

import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';



const UserMenu = () => {
  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal =  useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen ] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  },[]);

  const onRent = useCallback(() => {
    // if not logged in, open loginmodal
    if(true){
        return loginModal.onOpen();
    }

    rentModal.onOpen();
  },[loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          나의 시설
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:-px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu/>
          <div className="hidden md:block">
            <Avatar src=""/>
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          '
        >
          <div className="flex flex-col cursor-pointer">
            
            {true ? (
              <>
                <MenuItem 
                  label="홈" 
                  onClick={() => router.push('/home')}
                />
                <MenuItem 
                  label="찜" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="예약" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="나의 시설" 
                  onClick={rentModal.onOpen}
                />

                <hr />
                <MenuItem 
                  label="로그아웃" 
                  onClick={()=>{}}
                /> 
              </>
            ) : (
              <>
                <MenuItem 
                  label="로그인" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="회원가입" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;