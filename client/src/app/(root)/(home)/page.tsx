import IntroSection from '@/components/home-ui/Home/IntroServices';
import BenefitsSection from '@/components/home-ui/Home/BenefitsSection';
import ContactForm from '@/components/_components-reuse/ContactForm';

import IntroService from '@/components/_components-reuse/IntroSection';

export default function Home() {
    return (
        <>
            <section className="container mx-auto px-4 md:px-8">
                <IntroService
                    title="GIẶT GÌ KHÓ ĐÃ CÓ MOON LO!"
                    description="MOON hiểu nỗi lo về cái áo trắng tinh mới mua ko lâu bị lem màu, chiếc áo khoác len sợ bị xù lông hay bộ drap giường bị phai màu khi gửi giặt dịch vụ của khách hàng. Nhưng không sao cả, MOON luôn tận tay chăm sóc từng món đồ mà khách đã tin tưởng giao phó như chính quần áo của MOON vậy."
                    imageUrl="/images/hero.png"
                    isImageFirst={false}
                />
                <IntroSection />
            </section>
            <BenefitsSection />
            <ContactForm />
        </>
    );
}
