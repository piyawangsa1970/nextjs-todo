import Navbar from '@/components/todo/Navbar'

export default function TodoLayout(
	{ children, }: { children: React.ReactNode }) {

	return (
		<div className="max-w-3xl mx-auto p-4">
			<Navbar />
			<div className='mt-8'>
				{children}
			</div>
			
		</div>
	)
}
