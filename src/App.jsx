import StatCard from './components/ui/StatCard';
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, PieChart, Pie } from 'recharts';
import { TrendingUp, Users, AlertTriangle, Award, Heart, Target, Zap, TrendingDown, BookOpen, CheckCircle, ArrowRight, UserCheck, Lightbulb } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('contexto');
  const [filtroRegion, setFiltroRegion] = useState('todas');

  const statsGenerales = {
    total: 83,
    scorePromedio: 15.39,
    scoreMin: 5,
    scoreMax: 29,
    scoreMediana: 15
  };

  const pillarData = [
    { pilar: 'Planificación', adopcion: 96.4, n: 80, color: '#10b981' },
    { pilar: 'Asesoría Veterinaria', adopcion: 91.6, n: 76, color: '#3b82f6' },
    { pilar: 'Manejo Reproductivo', adopcion: 83.1, n: 69, color: '#8b5cf6' },
    { pilar: 'Tiene Mapa', adopcion: 74.7, n: 62, color: '#06b6d4' },
    { pilar: 'Separa Residuos', adopcion: 61.4, n: 51, color: '#f59e0b' },
    { pilar: 'Documentación', adopcion: 61.4, n: 51, color: '#f97316' },
    { pilar: 'Gestión Efluentes', adopcion: 33.7, n: 28, color: '#ef4444' }
  ];

  const scaleData = [
    { escala: '101-250', score: 15.11, n: 18 },
    { escala: '251-500', score: 12.15, n: 13 },
    { escala: '501-1000', score: 15.46, n: 13 },
    { escala: '1001-5000', score: 16.64, n: 25 }
  ];

  const conocimientoData = [
    { nivel: 'Sí', score: 17.86, n: 36, color: '#10b981' },
    { nivel: 'Parcialmente', score: 13.76, n: 42, color: '#f59e0b' },
    { nivel: 'No', score: 11.20, n: 5, color: '#ef4444' }
  ];

  const asesoriaData = [
    { tipo: 'Permanente', score: 18.32, n: 37 },
    { tipo: 'Planificar procesos', score: 14.41, n: 22 },
    { tipo: 'Solo enfermos', score: 12.41, n: 17 }
  ];

  // NUEVO: Datos de clustering
  const clusterData = [
    { nombre: 'Adopción Avanzada', n: 24, porcentaje: 28.9, score: 20.4, conoceBPG: 92, asesoría: 100, color: '#10b981' },
    { nombre: 'Adopción Media-Alta', n: 33, porcentaje: 39.8, score: 14.8, conoceBPG: 33, asesoría: 100, color: '#3b82f6' },
    { nombre: 'Adopción Media', n: 15, porcentaje: 18.1, score: 12.7, conoceBPG: 0, asesoría: 100, color: '#f59e0b' },
    { nombre: 'Adopción Baja', n: 9, porcentaje: 10.8, score: 10.7, conoceBPG: 33, asesoría: 44, color: '#8b5cf6' },
    { nombre: 'Adopción Crítica', n: 2, porcentaje: 2.4, score: 6.5, conoceBPG: 0, asesoría: 0, color: '#ef4444' }
  ];

  // NUEVO: Mapa de calor provincial
  const mapaCalorProvincial = [
    { provincia: 'Santa Fe', pct: 60, n: 15, nivel: 'Alto', color: '#10b981' },
    { provincia: 'Córdoba', pct: 53.3, n: 15, nivel: 'Alto', color: '#10b981' },
    { provincia: 'Buenos Aires', pct: 33.3, n: 36, nivel: 'Medio', color: '#f59e0b' },
    { provincia: 'Otras', pct: 45, n: 17, nivel: 'Medio', color: '#f59e0b' }
  ];

  // NUEVO: Quick Wins basados en Manual BPG-VCF
  const quickWinsData = [
    { 
      practica: 'Capacitación BPG',
      impacto: 90,
      facilidad: 85,
      brecha: 56.6,
      complejidad: 'BAJA',
      seccion: '2.20-2.22',
      color: '#10b981',
      size: 400
    },
    { 
      practica: 'Plan Manejo Residuos',
      impacto: 65,
      facilidad: 90,
      brecha: 38.6,
      complejidad: 'BAJA',
      seccion: '7.11',
      color: '#3b82f6',
      size: 300
    },
    { 
      practica: 'Sistema Documentación',
      impacto: 75,
      facilidad: 70,
      brecha: 38.6,
      complejidad: 'BAJA',
      seccion: '1.11-1.12',
      color: '#f59e0b',
      size: 300
    },
    { 
      practica: 'Asesoría Veterinaria',
      impacto: 85,
      facilidad: 60,
      brecha: 55.4,
      complejidad: 'MEDIA',
      seccion: '11.1-11.2',
      color: '#8b5cf6',
      size: 350
    },
    { 
      practica: 'Sistema Gestión Efluentes',
      impacto: 80,
      facilidad: 30,
      brecha: 66.3,
      complejidad: 'ALTA',
      seccion: '7.1-7.7',
      color: '#ef4444',
      size: 400
    }
  ];

  const sections = [
    { id: 'contexto', label: 'Contexto', icon: BookOpen },
    { id: 'overview', label: 'Resumen', icon: Target },
    { id: 'factores', label: 'Factores Clave', icon: TrendingUp },
    { id: 'clustering', label: 'Segmentación', icon: UserCheck },
    { id: 'quickwins', label: 'Quick Wins', icon: Lightbulb },
    { id: 'brechas', label: 'Brechas', icon: AlertTriangle },
    { id: 'outliers', label: 'Casos Destacados', icon: Award },
    { id: 'proyectos', label: 'Proyectos', icon: Zap },
    { id: 'conclusiones', label: 'Conclusiones', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Análisis de Buenas Prácticas Ganaderas</h1>
        <p className="text-lg text-blue-100">Estudio de Adopción en Productores Argentinos</p>
        <div className="mt-4 flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>N = 83 productores</span>
          </div>
          <div className="flex items-center gap-2">
            <Target size={18} />
            <span>Score: 5-29 (Promedio: 15.39)</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
        <div className="flex gap-2 p-4 overflow-x-auto">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <Icon size={18} />
                {section.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-8">
        {activeSection === 'contexto' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 border border-indigo-500">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={40} />
                <h2 className="text-3xl font-bold">Contexto del Estudio</h2>
              </div>
              <p className="text-lg text-indigo-50 mb-6">
                Evaluación integral de la adopción de Buenas Prácticas Ganaderas en establecimientos argentinos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Objetivos</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>Medir el nivel de adopción de BPG en productores argentinos</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>Identificar factores que influyen en la implementación</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>Detectar brechas críticas de conocimiento y aplicación</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>Proponer intervenciones basadas en evidencia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Metodología</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-2">Instrumento</div>
                    <p className="text-slate-300">Encuesta estructurada vía Google Forms con 32 preguntas sobre prácticas específicas</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Score de Adopción</div>
                    <p className="text-slate-300">Suma de respuestas positivas (Sí=1, No=0) sobre 32 prácticas evaluadas. Rango: 0-32 puntos</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Muestra</div>
                    <p className="text-slate-300">83 productores de Buenos Aires, Córdoba, Santa Fe y otras provincias</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Características de la Muestra</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Total Productores</div>
                  <div className="text-3xl font-bold">83</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Provincias</div>
                  <div className="text-3xl font-bold">5</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Tamaños</div>
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-xs text-slate-400">categorías</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Prácticas</div>
                  <div className="text-3xl font-bold">32</div>
                  <div className="text-xs text-slate-400">evaluadas</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">¿Listo para explorar los hallazgos?</h3>
                <p className="text-blue-50">Navega a "Resumen" para ver los resultados principales</p>
              </div>
              <button
                onClick={() => setActiveSection('overview')}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                Ver Resumen
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 border border-emerald-500">
              <h2 className="text-2xl font-bold mb-2">Panorama General de Adopción</h2>
              <p className="text-emerald-50">Los productores adoptan en promedio el 48% de las prácticas evaluadas</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Distribución de Puntuación</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <StatCard label="Mínimo" value="5" color="red" />
  <StatCard label="Mediana" value="15" color="yellow" />
  <StatCard label="Promedio" value="15.39" color="blue" />
  <StatCard label="Máximo" value="29" color="green" />
</div>
            </div>

            {/* NUEVO: Mapa de Calor Provincial */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Mapa de Calor: Conocimiento BPG por Provincia</h3>
              <p className="text-slate-300 mb-4">% de productores que conocen completamente las BPG</p>
              <div className="space-y-4">
                {mapaCalorProvincial.map(prov => (
                  <div key={prov.provincia}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{prov.provincia}</span>
                      <span className={`px-3 py-1 rounded text-sm font-bold ${
                        prov.nivel === 'Alto' ? 'bg-green-600' : 'bg-orange-600'
                      }`}>
                        {prov.pct}% (n={prov.n})
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-4">
                      <div 
                        className="h-4 rounded-full transition-all" 
                        style={{ width: `${prov.pct}%`, backgroundColor: prov.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-orange-600/20 rounded-lg p-4 mt-4 border border-orange-600">
                <p className="text-orange-100">
                  <strong>⚠️ Insight:</strong> Buenos Aires tiene solo 33.3% de adopción de conocimiento BPG, siendo la provincia con más productores (43% del total). Mayor oportunidad de impacto.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Tasa de Adopción por Práctica</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={pillarData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    dataKey="pilar" 
                    stroke="#94a3b8"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                  />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  />
                  <Bar dataKey="adopcion" radius={[8, 8, 0, 0]}>
                    {pillarData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Factores Clave</h3>
              </div>
              <button
                onClick={() => setActiveSection('factores')}
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-amber-50 transition-all flex items-center gap-2"
              >
                Ver Factores
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'factores' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 border border-purple-500">
              <h2 className="text-2xl font-bold mb-2">Factores que Impulsan la Adopción</h2>
              <p className="text-purple-50">Tres variables clave explican las diferencias en adopción de BPG</p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 border border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Award size={32} />
                <h2 className="text-2xl font-bold">Factor #1: Conocimiento Previo</h2>
              </div>
              <p className="text-lg text-green-50 mb-4">
                Diferencia de 6.7 puntos entre quienes conocen vs no conocen BPG
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conocimientoData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                  <XAxis dataKey="nivel" stroke="#fff" />
                  <YAxis stroke="#fff" domain={[0, 20]} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b' }} />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                    {conocimientoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="bg-white/10 rounded-lg p-4 mt-4">
                <p className="text-green-50">
                  <strong>Insight:</strong> 50.6% conoce solo parcialmente las BPG. Esta es la principal oportunidad de mejora.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown size={28} className="text-orange-400" />
                <h3 className="text-2xl font-bold">Factor #2: "Valle de los Medianos"</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Productores de 251-500 cabezas tienen el score más bajo (12.15)
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={scaleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="escala" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[10, 18]} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b' }} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="bg-orange-600/20 rounded-lg p-4 mt-4 border border-orange-600">
                <p className="text-orange-100">
                  <strong>Insight:</strong> Los establecimientos medianos muestran menor adopción que pequeños y grandes. Posible falta de recursos o asesoramiento especializado.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Heart size={28} className="text-blue-400" />
                <h3 className="text-2xl font-bold">Factor #3: Tipo de Asesoramiento</h3>
              </div>
              <p className="text-slate-300 mb-6">6 puntos de diferencia según tipo de asesoramiento veterinario</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={asesoriaData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" domain={[0, 20]} />
                  <YAxis type="category" dataKey="tipo" stroke="#94a3b8" width={120} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b' }} />
                  <Bar dataKey="score" fill="#3b82f6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="bg-blue-600/20 rounded-lg p-4 mt-4 border border-blue-600">
                <p className="text-blue-100">
                  <strong>Insight:</strong> El asesoramiento permanente genera 48% más adopción que atención solo a enfermos.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Segmentación de Productores</h3>
              </div>
              <button
                onClick={() => setActiveSection('clustering')}
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-bold hover:bg-cyan-50 transition-all flex items-center gap-2"
              >
                Ver Segmentación
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* NUEVA SECCIÓN: CLUSTERING */}
        {activeSection === 'clustering' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 border border-indigo-500">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck size={40} />
                <h2 className="text-3xl font-bold">Segmentación de Productores</h2>
              </div>
              <p className="text-lg text-indigo-50">
                Clasificación basada en score de adopción, conocimiento de BPG y tipo de asesoramiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clusterData.slice(0, 3).map(cluster => (
                <div key={cluster.nombre} className="bg-slate-800 rounded-xl p-6 border-2" style={{ borderColor: cluster.color }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{cluster.nombre}</h3>
                    <div className="text-3xl font-bold" style={{ color: cluster.color }}>{cluster.porcentaje}%</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Productores</span>
                      <span className="font-bold">{cluster.n}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Score promedio</span>
                      <span className="font-bold">{cluster.score}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Conoce BPG</span>
                      <span className="font-bold">{cluster.conoceBPG}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Asesoría regular</span>
                      <span className="font-bold">{cluster.asesoría}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clusterData.slice(3, 5).map(cluster => (
                <div key={cluster.nombre} className="bg-slate-800 rounded-xl p-6 border-2" style={{ borderColor: cluster.color }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{cluster.nombre}</h3>
                    <div className="text-3xl font-bold" style={{ color: cluster.color }}>{cluster.porcentaje}%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 text-sm">Productores</span>
                      <div className="font-bold text-lg">{cluster.n}</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-sm">Score</span>
                      <div className="font-bold text-lg">{cluster.score}</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-sm">Conoce BPG</span>
                      <div className="font-bold text-lg">{cluster.conoceBPG}%</div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-sm">Asesoría</span>
                      <div className="font-bold text-lg">{cluster.asesoría}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Distribución por Nivel de Adopción</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={clusterData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="porcentaje"
                    label={(entry) => `${entry.nombre}: ${entry.porcentaje}%`}
                  >
                    {clusterData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Estrategias de Intervención por Segmento</h3>
              <div className="space-y-4">
                <div className="bg-green-600/20 rounded-lg p-4 border-l-4 border-green-600">
                  <h4 className="font-bold text-lg mb-2">Adopción Avanzada (28.9%)</h4>
                  <p className="text-sm text-slate-300">Score 20.4 | 92% conoce BPG | 100% asesoría</p>
                  <p className="mt-2"><strong>Estrategia:</strong> Programa de mentores - compartir mejores prácticas con otros segmentos</p>
                </div>

                <div className="bg-blue-600/20 rounded-lg p-4 border-l-4 border-blue-600">
                  <h4 className="font-bold text-lg mb-2">Adopción Media-Alta (39.8%)</h4>
                  <p className="text-sm text-slate-300">Score 14.8 | 33% conoce BPG | 100% asesoría</p>
                  <p className="mt-2"><strong>Estrategia:</strong> Sistema RAG + capacitación específica en BPG</p>
                </div>

                <div className="bg-orange-600/20 rounded-lg p-4 border-l-4 border-orange-600">
                  <h4 className="font-bold text-lg mb-2">Adopción Media (18.1%)</h4>
                  <p className="text-sm text-slate-300">Score 12.7 | 0% conoce BPG | 100% asesoría</p>
                  <p className="mt-2"><strong>Estrategia:</strong> Quick wins + talleres prácticos regionales</p>
                </div>

                <div className="bg-purple-600/20 rounded-lg p-4 border-l-4 border-purple-600">
                  <h4 className="font-bold text-lg mb-2">Adopción Baja (10.8%)</h4>
                  <p className="text-sm text-slate-300">Score 10.7 | 33% conoce BPG | 44% asesoría</p>
                  <p className="mt-2"><strong>Estrategia:</strong> Evaluación individual + plan personalizado</p>
                </div>

                <div className="bg-red-600/20 rounded-lg p-4 border-l-4 border-red-600">
                  <h4 className="font-bold text-lg mb-2">Adopción Crítica (2.4%)</h4>
                  <p className="text-sm text-slate-300">Score 6.5 | 0% conoce BPG | 0% asesoría</p>
                  <p className="mt-2"><strong>Estrategia:</strong> Acompañamiento intensivo + subsidios para asesoría</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Quick Wins</h3>
              </div>
              <button
                onClick={() => setActiveSection('quickwins')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all flex items-center gap-2"
              >
                Ver Quick Wins
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* NUEVA SECCIÓN: QUICK WINS */}
        {activeSection === 'quickwins' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-8 border border-yellow-400">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={40} />
                <h2 className="text-3xl font-bold">Quick Wins - Matriz de Priorización</h2>
              </div>
              <p className="text-lg text-yellow-50">
                Prácticas ordenadas por impacto potencial y facilidad de implementación
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Matriz: Impacto vs Facilidad</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart margin={{ top: 20, right: 80, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    type="number" 
                    dataKey="facilidad" 
                    name="Facilidad" 
                    stroke="#94a3b8"
                    domain={[0, 100]}
                    label={{ value: 'Facilidad de Implementación →', position: 'insideBottom', offset: -10 }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="impacto" 
                    name="Impacto" 
                    stroke="#94a3b8"
                    domain={[0, 100]}
                    label={{ value: '← Impacto Potencial', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-800 p-4 rounded border border-slate-600">
                            <p className="font-bold mb-2">{data.practica}</p>
                            <p className="text-sm">Impacto: {data.impacto}/100</p>
                            <p className="text-sm">Facilidad: {data.facilidad}/100</p>
                            <p className="text-sm">Brecha: {data.brecha}%</p>
                            <p className="text-sm">Manual BPG: Sección {data.seccion}</p>
                            <p className="text-sm">Complejidad: {data.complejidad}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter name="Prácticas" data={quickWinsData}>
                    {quickWinsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-green-600/20 rounded-lg p-3 border border-green-600">
                  <p className="text-sm font-bold text-green-300">🟢 QUICK WINS (Alto Impacto + Alta Facilidad)</p>
                  <p className="text-xs text-green-200 mt-1">Cuadrante superior derecho - priorizar</p>
                </div>
                <div className="bg-red-600/20 rounded-lg p-3 border border-red-600">
                  <p className="text-sm font-bold text-red-300">🔴 LARGO PLAZO (Alto Impacto + Baja Facilidad)</p>
                  <p className="text-xs text-red-200 mt-1">Cuadrante superior izquierdo - planificar</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-600/20 rounded-xl p-6 border-2 border-green-600">
                <h3 className="text-xl font-bold mb-4 text-green-300">🎯 Top 3 Quick Wins (Secciones del Manual BPG)</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">1. Capacitación en BPG</span>
                      <span className="bg-green-600 px-2 py-1 rounded text-xs">PRIORITARIO</span>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div><strong>Brecha:</strong> 56.6% no conoce completamente BPG</div>
                      <div><strong>Manual BPG (2.20-2.22):</strong> "Plan de capacitación integral para el personal... incluir formación en seguridad e higiene laboral, protección del ambiente y bienestar animal"</div>
                      <div><strong>Impacto:</strong> +6.7 puntos en score de adopción</div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">2. Plan Manejo de Residuos</span>
                      <span className="bg-green-600 px-2 py-1 rounded text-xs">PRIORITARIO</span>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div><strong>Brecha:</strong> 38.6% no separa residuos</div>
                      <div><strong>Manual BPG (7.11):</strong> "Elaborar Plan de Manejo de Residuos que incluya: clasificación, almacenamiento y disposición final"</div>
                      <div><strong>Facilidad:</strong> Alta - requiere organización y capacitación</div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">3. Sistema de Documentación</span>
                      <span className="bg-green-600 px-2 py-1 rounded text-xs">PRIORITARIO</span>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div><strong>Brecha:</strong> 38.6% no documenta adecuadamente</div>
                      <div><strong>Manual BPG (1.11-1.12):</strong> "Los planes, protocolos y registros deben estar disponibles, actualizados, completos... Garantizar la trazabilidad de la información"</div>
                      <div><strong>Facilidad:</strong> Media - requiere sistematización</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-600/20 rounded-xl p-6 border-2 border-orange-600">
                <h3 className="text-xl font-bold mb-4 text-orange-300">⏱️ Mediano y Largo Plazo</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">4. Asesoría Veterinaria</span>
                      <span className="bg-orange-600 px-2 py-1 rounded text-xs">MEDIO PLAZO</span>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div><strong>Brecha:</strong> 55.4% sin asesoría permanente</div>
                      <div><strong>Manual BPG (11.1-11.2):</strong> "Todos los establecimientos deben disponer de asesor veterinario... Elaborar plan sanitario establecido por veterinario"</div>
                      <div><strong>Impacto:</strong> +6 puntos en score de adopción</div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">5. Gestión de Efluentes</span>
                      <span className="bg-red-600 px-2 py-1 rounded text-xs">LARGO PLAZO</span>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div><strong>Brecha:</strong> 66.3% (mayor brecha identificada)</div>
                      <div><strong>Manual BPG (7.2-7.4):</strong> "El estiércol debe almacenarse impermeabilizado... Elaborar plan de tratamiento que considere recolección, almacenamiento y tratamiento"</div>
                      <div><strong>Complejidad:</strong> Alta - requiere infraestructura</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 border border-green-500">
              <h3 className="text-2xl font-bold mb-4">Plan de Implementación Basado en Manual BPG-VCF</h3>
              <p className="text-sm text-emerald-100 mb-4">Acciones priorizadas según complejidad y brecha identificada</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold mb-2">Corto Plazo</div>
                  <ul className="text-sm space-y-1">
                    <li>✓ Capacitación en BPG (Sección 2.20-2.22)</li>
                    <li>✓ Plan manejo residuos (Sección 7.11)</li>
                    <li>✓ Sistema documentación (Sección 1.11-1.12)</li>
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Mediano Plazo</div>
                  <ul className="text-sm space-y-1">
                    <li>✓ Asesoría veterinaria (Sección 11.1-11.2)</li>
                    <li>✓ Sistema RAG para consultas</li>
                    <li>✓ Evaluación de progreso</li>
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Largo Plazo</div>
                  <ul className="text-sm space-y-1">
                    <li>✓ Sistema gestión efluentes (Sección 7.1-7.7)</li>
                    <li>✓ Infraestructura especializada</li>
                    <li>✓ Auditoría y certificación</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Brechas de Adopción</h3>
              </div>
              <button
                onClick={() => setActiveSection('brechas')}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                Ver Brechas
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'brechas' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 border border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={32} />
                <h2 className="text-2xl font-bold">Brechas de Adopción</h2>
              </div>
              <p className="text-lg text-red-50">
                Diferencia de 63 puntos porcentuales entre prácticas más y menos adoptadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-600/20 rounded-xl p-6 border border-green-600">
                <h3 className="text-xl font-bold mb-4 text-green-300">✓ Alta Adopción (&gt;80%)</h3>
                <p className="text-sm text-green-200 mb-4">Prácticas consolidadas - mantener y reforzar</p>
                {pillarData.filter(p => p.adopcion > 80).map(p => (
                  <div key={p.pilar} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span>{p.pilar}</span>
                      <span className="font-bold">{p.adopcion.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div className="h-3 rounded-full bg-green-400" style={{ width: `${p.adopcion}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-600/20 rounded-xl p-6 border border-red-600">
                <h3 className="text-xl font-bold mb-4 text-red-300">⚠ Baja Adopción (&lt;65%)</h3>
                <p className="text-sm text-red-200 mb-4">Prácticas críticas - requieren intervención</p>
                {pillarData.filter(p => p.adopcion < 65).map(p => (
                  <div key={p.pilar} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span>{p.pilar}</span>
                      <span className="font-bold">{p.adopcion.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div className="h-3 rounded-full bg-red-400" style={{ width: `${p.adopcion}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Análisis de Brecha Crítica</h3>
              <div className="space-y-4">
                <div className="bg-red-600/20 rounded-lg p-4 border border-red-600">
                  <h4 className="font-bold text-lg mb-2">Gestión de Efluentes: 33.7%</h4>
                  <p className="text-sm text-red-200">
                    Sólo 1 de cada 3 productores gestiona adecuadamente los efluentes. Representa riesgo ambiental y sanitario significativo.
                  </p>
                </div>
                <div className="bg-orange-600/20 rounded-lg p-4 border border-orange-600">
                  <h4 className="font-bold text-lg mb-2">Documentación y Separación de Residuos: 61.4%</h4>
                  <p className="text-sm text-orange-200">
                    4 de cada 10 productores no documentan procesos ni separan residuos. Limita trazabilidad y sostenibilidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Casos Destacados</h3>
              </div>
              <button
                onClick={() => setActiveSection('outliers')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all flex items-center gap-2"
              >
                Ver Casos
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'outliers' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-xl p-6 border border-yellow-500">
              <div className="flex items-center gap-3 mb-4">
                <Award size={32} />
                <h2 className="text-2xl font-bold">Casos Destacados</h2>
              </div>
              <p className="text-lg text-yellow-50">
                Análisis de productores con mejor y peor desempeño para identificar patrones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-600/20 rounded-xl p-6 border border-green-600">
                <h3 className="text-xl font-bold mb-4 text-green-300">🏆 Top 3 - Mejores Prácticas</h3>
                <p className="text-sm text-green-200 mb-4">Score superior a 28 puntos (87%+ de adopción)</p>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">29</div>
                    <div className="text-sm">1001-5000 cabezas | Córdoba</div>
                    <div className="text-xs text-slate-400 mt-1">Conoce BPG + Asesoría permanente</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">28</div>
                    <div className="text-sm">101-250 cabezas | Santa Fe</div>
                    <div className="text-xs text-slate-400 mt-1">Alta capacitación + Asesoría</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">28</div>
                    <div className="text-sm">&gt;10000 cabezas | Buenos Aires</div>
                    <div className="text-xs text-slate-400 mt-1">Gran escala + Profesionalización</div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-3 mt-4">
                  <p className="text-sm text-green-100">
                    <strong>Patrón común:</strong> Conocimiento previo de BPG + asesoramiento permanente + documentación sistemática
                  </p>
                </div>
              </div>

              <div className="bg-red-600/20 rounded-xl p-6 border border-red-600">
                <h3 className="text-xl font-bold mb-4 text-red-300">⚠️ Bottom 3 - Mayor Desafío</h3>
                <p className="text-sm text-red-200 mb-4">Score inferior a 8 puntos (25% de adopción)</p>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">5</div>
                    <div className="text-sm">251-500 cabezas | Córdoba</div>
                    <div className="text-xs text-slate-400 mt-1">No conoce BPG + Sin asesoría</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">5</div>
                    <div className="text-sm">501-1000 cabezas | Buenos Aires</div>
                    <div className="text-xs text-slate-400 mt-1">Asesoría solo para enfermos</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">7</div>
                    <div className="text-sm">101-250 cabezas | Córdoba</div>
                    <div className="text-xs text-slate-400 mt-1">Desconoce BPG + Recursos limitados</div>
                  </div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-3 mt-4">
                  <p className="text-sm text-red-100">
                    <strong>Patrón común:</strong> Desconocimiento de BPG + ausencia de asesoramiento + falta de documentación
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Proyectos Propuestos</h3>
              </div>
              <button
                onClick={() => setActiveSection('proyectos')}
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-all flex items-center gap-2"
              >
                Ver Proyectos
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'proyectos' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 border border-purple-500">
              <h2 className="text-3xl font-bold mb-4">Proyecto Propuesto</h2>
              <p className="text-lg text-purple-50">Basado en hallazgos del análisis y Manual BPG-VCF</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 border-4 border-cyan-400">
              <div className="flex items-center gap-4 mb-6">
                <Zap size={40} />
                <div>
                  <h3 className="text-3xl font-bold">Sistema RAG - Asistente Virtual de BPG</h3>
                  <p className="text-xl">Retrieval-Augmented Generation</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                  <h4 className="text-xl font-bold mb-4">¿Qué es RAG?</h4>
                  <p className="text-cyan-50 mb-4">
                    RAG combina <strong>búsqueda inteligente</strong> en documentos específicos con <strong>generación de respuestas</strong> usando IA.
                  </p>
                  <p className="text-cyan-50">
                    No entrena un modelo desde cero, sino que busca información relevante en el Manual BPG-VCF oficial y genera respuestas precisas basadas en esa información.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                  <h4 className="text-xl font-bold mb-4">Ejemplo Práctico</h4>
                  <div className="bg-slate-900/50 rounded-lg p-4 mb-3">
                    <p className="text-sm text-cyan-200 mb-2"><strong>Productor pregunta:</strong></p>
                    <p className="text-sm text-white">"¿Cómo gestiono los efluentes de mi feedlot?"</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sm text-emerald-200 mb-2"><strong>Sistema RAG responde:</strong></p>
                    <p className="text-sm text-white">"Según Manual BPG-VCF sección 7.2: El estiércol debe almacenarse en lugar impermeabilizado..."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Justificación del Proyecto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-red-400">Problema Identificado</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• <strong>56.6%</strong> de productores NO conocen completamente las BPG</li>
                    <li>• <strong>50.6%</strong> conoce solo parcialmente</li>
                    <li>• Diferencia de <strong>6.7 puntos</strong> en score entre quienes conocen vs no conocen</li>
                    <li>• Manual BPG-VCF de 48 páginas con información técnica compleja</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-400">Solución RAG</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Asistente virtual 24/7 basado en Manual oficial</li>
                    <li>• Respuestas precisas citando secciones específicas</li>
                    <li>• Accesible desde cualquier dispositivo</li>
                    <li>• Reduce brecha de conocimiento sin capacitaciones presenciales</li>
                    <li>• Garantiza respuestas del Manual oficial, no de internet general</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Impacto Esperado</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">+4-7</div>
                  <p className="text-sm">Puntos estimados de mejora en score de adopción</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
                  <p className="text-sm">Disponibilidad de consultas sin límites de horario</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <div className="text-3xl font-bold text-purple-300 mb-2">100%</div>
                  <p className="text-sm">Fidelidad al Manual BPG-VCF oficial</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Siguiente: Conclusiones</h3>
              </div>
              <button
                onClick={() => setActiveSection('conclusiones')}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-all flex items-center gap-2"
              >
                Ver Conclusiones
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {activeSection === 'conclusiones' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 border border-indigo-500">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={40} />
                <h2 className="text-3xl font-bold">Conclusiones y Recomendaciones</h2>
              </div>
              <p className="text-lg text-indigo-50">
                Síntesis de hallazgos clave y acciones prioritarias para mejorar la adopción de BPG
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Top 3 Hallazgos Principales</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-emerald-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">El conocimiento es el diferenciador clave</h4>
                    <p className="text-slate-300">6.7 puntos de diferencia entre quienes conocen vs no conocen BPG. El 50.6% conoce solo parcialmente, representando la mayor oportunidad de mejora.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Existe un "valle" en productores medianos</h4>
                    <p className="text-slate-300">Los establecimientos de 251-500 cabezas tienen el menor score (12.15). Requieren atención focalizada con recursos adaptados a su escala.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Brechas críticas en prácticas ambientales</h4>
                    <p className="text-slate-300">Solo 33.7% gestiona efluentes y 61.4% separa residuos. Son las prácticas más complejas pero también las más importantes para sostenibilidad.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Recomendaciones Basadas en Manual BPG-VCF</h3>
              <div className="space-y-4">
                <div className="bg-green-600/20 rounded-lg p-4 border-l-4 border-green-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">PRIORIDAD 1</span>
                    <h4 className="font-bold text-lg">Capacitación Integral en BPG</h4>
                  </div>
                  <p className="text-slate-300 mb-2">
                    <strong>Manual BPG (2.20-2.22):</strong> "Plan de capacitación integral para el personal actual e ingresante según funciones... incluir formación en seguridad e higiene laboral, protección del ambiente y bienestar animal."
                  </p>
                  <div className="text-sm text-slate-400">Beneficia: 47 productores (56.6%) que no conocen completamente BPG | Impacto: +6.7 puntos en score</div>
                </div>

                <div className="bg-orange-600/20 rounded-lg p-4 border-l-4 border-orange-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold">PRIORIDAD 2</span>
                    <h4 className="font-bold text-lg">Sistema de Gestión de Efluentes</h4>
                  </div>
                  <p className="text-slate-300 mb-2">
                    <strong>Manual BPG (7.2, 7.4):</strong> "El estiércol debe almacenarse impermeabilizado natural o artificialmente... Elaborar plan de tratamiento que considere recolección, almacenamiento, acondicionamiento y posible uso."
                  </p>
                  <div className="text-sm text-slate-400">Beneficia: 55 productores (66.3%) sin gestión adecuada | Mayor brecha identificada</div>
                </div>

                <div className="bg-blue-600/20 rounded-lg p-4 border-l-4 border-blue-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">PRIORIDAD 3</span>
                    <h4 className="font-bold text-lg">Asesoramiento Veterinario Permanente</h4>
                  </div>
                  <p className="text-slate-300 mb-2">
                    <strong>Manual BPG (11.1-11.2):</strong> "Todos los establecimientos deben disponer de servicios de un asesor veterinario... Elaborar plan sanitario establecido por veterinario para prevención, control y erradicación de enfermedades."
                  </p>
                  <div className="text-sm text-slate-400">Beneficia: 46 productores (55.4%) sin asesoría permanente | Impacto: +6 puntos en score</div>
                </div>

                <div className="bg-purple-600/20 rounded-lg p-4 border-l-4 border-purple-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold">COMPLEMENTARIO</span>
                    <h4 className="font-bold text-lg">Plan de Manejo de Residuos y Sistema de Documentación</h4>
                  </div>
                  <p className="text-slate-300 mb-2">
                    <strong>Manual BPG (7.11, 1.11-1.12):</strong> "Plan de Manejo de Residuos que incluya clasificación, almacenamiento y disposición final" + "Planes, protocolos y registros disponibles, actualizados y completos para garantizar trazabilidad."
                  </p>
                  <div className="text-sm text-slate-400">Beneficia: 32 productores (38.6%) cada uno | Facilidad de implementación: Alta-Media</div>
                </div>

                <div className="bg-cyan-600/20 rounded-lg p-4 border-l-4 border-cyan-600">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded text-sm font-bold">ESTRATÉGICO</span>
                    <h4 className="font-bold text-lg">Programa Focalizado para Productores Medianos</h4>
                  </div>
                  <p className="text-slate-300 mb-2">
                    Establecimientos de 251-500 cabezas muestran el menor score (12.15). Aplicar secciones del manual con enfoque adaptado a su escala: capacitación específica y asesoramiento según complejidad de su operación.
                  </p>
                  <div className="text-sm text-slate-400">Beneficia: 13 productores en "valle de los medianos" | Cierra brecha crítica</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">¡Gracias!</h3>
              <p className="text-xl mb-4">¿Preguntas o comentarios?</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setActiveSection('contexto')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all"
                >
                  Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-800 border-t border-slate-700 p-6">
        <p className="text-center text-slate-400 text-sm">
          Dashboard de Buenas Prácticas Ganaderas
        </p>
      </div>
    </div>
  );
};

export default Dashboard;