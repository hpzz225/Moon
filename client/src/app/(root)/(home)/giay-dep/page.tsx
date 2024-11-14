import Banner from '@/components/_components-reuse/Banner';
import ContactForm from '@/components/_components-reuse/ContactForm';
import ContentHeader from '@/components/_components-reuse/ContentHeader';
import FeeDelivery from '@/components/_components-reuse/FreeDelivery';
import ServiceIntro from '@/components/_components-reuse/IntroSection';
import { PriceTable } from '@/components/_components-reuse/PriceTable';
import ServiceProcess from '@/components/_components-reuse/ServiceProcess';
import React from 'react';

const GiayDep = () => {
    const services = [
        {
            title: 'GIÀY THỂ THAO',
            headSubtitleIcon: '/images/fire.png',
            headSubtitle: 'COMBO VỆ SINH GIÀY SIÊU TIẾT KIỆM',
            subtitleIcon: '/images/star.png',
            subtitle: [
                'Vệ sinh 2 đôi chỉ với 65k',
                'Vệ sinh 3 đôi chỉ với 95k',
                'Vệ sinh 4 đôi chỉ với 120k',
                'Vệ sinh 5 đôi chỉ với 150k',
            ],
            price: '35k',
            quantity: 'đôi',

            imageUrl: '/images/giay.png',
            buttonLabel: 'Đặt dịch vụ',
        },
    ];
    return (
        <section className="bg-white">
            <Banner imageUrl="/images/logo-giay-dep.png" />
            <div className="container mx-auto ">
                <ServiceIntro
                    imageUrl={'/images/ve-sinh-giay-dep.png'}
                    title="Giật Sấy Lấy Liền!"
                    description="Dịch vụ vệ sinh giày, dép dù bằng tay nhưng vẫn đảm bảo được mức độ sạch sẽ cần thiết với mức chi phí hợp lý, đồng thời kéo dài tuổi thọ cho giày, giúp chúng luôn trong tình trạng tốt nhất để đồng hành trong các hoạt động hàng ngày."
                    isImageFirst
                />

                <ContentHeader title="Bảng Giá" iconSrc="/images/symbol.png" />
                <PriceTable items={services} layoutType="side-by-side" />
                <ContentHeader
                    title="Quy trình dịch vụ"
                    iconSrc="/images/symbol.png"
                />
                <ServiceProcess />
                <FeeDelivery />
                <ContactForm />
            </div>
        </section>
    );
};

export default GiayDep;
