const targetMap = new WeakMap<any, KeyToDepMap>()
type KeyToDepMap = Map<any, Dep>
export type Dep = Set<ReactiveEffect> & TrackedMarkers
