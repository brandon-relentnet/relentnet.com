import CustomButton from '@/components/CustomButton'
import SectionHeader from '@/components/sections/SectionHeader'

export default function EnterpriseSection() {
  return (
    <SectionHeader
      title="Got a Big Project?"
      subtitle="Enterprise Solutions"
      desc="Building something huge? Multiple languages? Thousands of products? We love a challenge. Let's chat about your custom project."
    >
      <CustomButton href="/contact">Tell Us Your Ideas</CustomButton>
    </SectionHeader>
  )
}
