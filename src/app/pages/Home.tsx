import { Footer, GeneratorCard } from '../components/index.js'
import { useLocale, useTitle } from '../contexts/index.js'

interface Props {
	path?: string,
}

export function Home({}: Props) {
	const { locale } = useLocale()
	useTitle(locale('title.home'))

	return <main>
		<div class="legacy-container">
			<div class="card-group">
				<div class="card-column">
					<h1>Encumbered Generators</h1>

					<div class="tool-group">
						<GeneratorCard minimal id="encumbered:boost_items" />
						<GeneratorCard minimal id="encumbered:item_weights" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</main>
}
