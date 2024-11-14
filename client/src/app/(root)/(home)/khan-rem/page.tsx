import ContactForm from '@/components/_components-reuse/ContactForm';
import ContentHeader from '@/components/_components-reuse/ContentHeader';
import FeeDelivery from '@/components/_components-reuse/FreeDelivery';
import Banner from '@/components/_components-reuse/Banner';
import { PriceTable } from '@/components/_components-reuse/PriceTable';

import ServiceIntro from '@/components/_components-reuse/IntroSection';
import ServiceProcess from '@/components/_components-reuse/ServiceProcess';

import React from 'react';

const KhanRem = () => {
    const services = [
        {
            title: 'GIẶT KHĂN SPA',
            subtitle: 'Nhận giặt khăn cho tiệm Spa, Khách sạn, Salon tóc',
            price: '10k',
            quantity: '1kg',
            imageUrl: '/images/giatkhanspa.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
        {
            title: 'GIẶT KHĂN BÀN',
            subtitle:
                'Nhận giặt tẩy trắng tất cả các loại khăn nhà hàng, khách sạn.',
            price: '15k',
            quantity: '1kg',
            imageUrl: '/images/giatkhanban.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
        {
            title: 'MÀN, RÈM',
            subtitleIcon: '/images/star.png',
            subtitle: 'Nhận tháo lắp màn, rèm cửa: +20k phí dịch vụ',
            price: '20k',
            quantity: '1kg',
            imageUrl: '/images/manrem.png',
            buttonLabel: 'Đặt dịch vụ',

            note: [
                'Số Kg được cân sau khi đồ đã được giặt và sấy khô.',
                '*Giặt sấy nhanh trong ngày : +10% phí dịch vụ',
            ],
        },
    ];
    return (
        <section className="bg-white">
            <Banner imageUrl="/images/logo-giat-say-khan-rem.png" />
            <div className="container mx-auto ">
                <ServiceIntro
                    imageUrl={'/images/giat-say-khan-rem.png'}
                    title="GIẶT SẤY KHĂN, RÈM"
                    description="Dịch vụ giặt sấy khăn, rèm là giải pháp tiện lợi dành cho các doanh nghiệp như khách sạn, spa, nhà nghỉ, resort, phòng gym hay các hộ gia đình có nhu cầu giặt số lượng lớn. Đây là một giải pháp không chỉ giúp tiết kiệm thời gian và công sức mà còn đảm bảo tiêu chuẩn vệ sinh khắt khe, giữ cho khăn luôn trong tình trạng tốt nhất"
                    isImageFirst={true}
                />

                <ContentHeader title="Bảng Giá" iconSrc="/images/symbol.png" />
                <PriceTable items={services} layoutType="grid" />
                {/* <PriceTable
                    items={services}
                    layoutType="side-by-side"
                    reverseLayout
                /> */}
                <ContentHeader
                    title="QUY TRÌNH DỊCH VỤ"
                    iconSrc="/images/symbol.png"
                />
                <ServiceProcess />
                <FeeDelivery />
                <ContactForm />
            </div>
        </section>
    );
};

export default KhanRem;
