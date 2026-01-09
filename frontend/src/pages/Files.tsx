const files = [
  { name: 'Roadmap.pdf', size: '1.2 MB', version: 'v3', owner: 'Lara' },
  { name: 'Design-kit.fig', size: '8.4 MB', version: 'v12', owner: 'Remy' },
  { name: 'Sprint-notes.md', size: '42 KB', version: 'v5', owner: 'Ivy' }
]

export default function Files() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">File library</div>
          <div className="text-2xl font-semibold">Versioned assets</div>
        </div>
        <button className="btn-primary">Upload file</button>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-slate-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Version</th>
              <th className="px-4 py-3">Owner</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.name} className="border-t border-white/5 hover:bg-white/5">
                <td className="px-4 py-3 font-semibold">{file.name}</td>
                <td className="px-4 py-3 text-slate-300">{file.size}</td>
                <td className="px-4 py-3 text-slate-300">{file.version}</td>
                <td className="px-4 py-3 text-slate-300">{file.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
