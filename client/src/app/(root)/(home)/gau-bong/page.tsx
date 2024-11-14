import Banner from '@/components/_components-reuse/Banner';
import ContactForm from '@/components/_components-reuse/ContactForm';
import ContentHeader from '@/components/_components-reuse/ContentHeader';
import FeeDelivery from '@/components/_components-reuse/FreeDelivery';
import ServiceIntro from '@/components/_components-reuse/ServiceIntro';
import { PriceTable } from '@/components/_components-reuse/PriceTable';
import ServiceProcess from '@/components/_components-reuse/ServiceProcess';
import React from 'react';

const GauBong = () => {
    const services = [
        {
            title: 'GẤU BÔNG',

            subtitleIcon: '/images/star.png',
            subtitle: ['Dưới 1kg: 10K/con', 'Trên 1kg: 15K/con'],
            price: '10k',
            quantity: 'con',

            imageUrl: '/images/gau-bong.png',
            buttonLabel: 'Đặt dịch vụ',
        },
        {
            title: 'TOPPER',

            subtitleIcon: '/images/star.png',
            subtitle: ['Dưới 1kg: 15K/cái', 'Trên 1kg: 30K/cái'],
            price: '15K',
            quantity: '1KG',

            imageUrl: '/images/topper.png',
            buttonLabel: 'Đặt dịch vụ',
        },
    ];
    return (
        <>
            <Banner imageUrl="/images/logo-gaubong-topper.png" />
            {/* <div className="container mx-auto"> */}
            <ServiceIntro
                imageUrl={'/images/ve-sinh-gaubong-topper.png'}
                title="Giật Sấy Lấy Liền!"
                description="Dịch vụ vệ sinh giày, dép dù bằng tay nhưng vẫn đảm bảo được mức độ sạch sẽ cần thiết với mức chi phí hợp lý, đồng thời kéo dài tuổi thọ cho giày, giúp chúng luôn trong tình trạng tốt nhất để đồng hành trong các hoạt động hàng ngày."
                isImageFirst
            />
            <ContentHeader title="Bảng Giá" iconSrc="/images/symbol.png" />
            <PriceTable
                items={[services[0]]}
                layoutType="side-by-side"
                isImageFirst={false}
            />
            <PriceTable
                items={[services[1]]}
                layoutType="side-by-side"
                isImageFirst={true}
            />
            <ContentHeader
                title="Quy trình dịch vụ"
                iconSrc="/images/symbol.png"
            />
            <ServiceProcess />
            <FeeDelivery />
            <ContactForm />
            {/* </div> */}
        </>
    );
};

export default GauBong;
