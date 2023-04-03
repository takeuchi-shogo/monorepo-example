"use client"
import { gql, useQuery } from "@apollo/client"

const query = gql`
query {
	user(id: 5) {
		id
		name
	}
}
`
export default function Page() {
	const { data, loading, error } = useQuery(query)

	if (loading) return <p className="text-white">Loading....</p>
	if (error) return <p className="text-white">Error!!!</p>

	return (
		<>
			(loading && (
				<p className="text-white">Loading....</p>
			))
			(data && (
				<div className="text-white">ユーザーページ</div>
				<div className="text-white">{ data?.user.name }</div>
			))
		</>
	)
}
